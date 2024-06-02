import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase-client";
import { useAuth } from "../utils/auth-context";

interface GameItem {
  id: string;
  title: string;
  description: string;
  cover_image: string;
}

export default function Game() {
  const { gameId }: { gameId?: string } = useParams();
  const { user, userDetails } = useAuth();

  const [game, setGame] = useState<GameItem | null>(null);
  const [trackedGame, setTrackedGame] = useState(false);
  const [selectedScore, setSelectedScore] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [review, setReview] = useState<string>("");

  useEffect(() => {
    const fetchGame = async () => {
      if (gameId) {
        const { data, error } = await supabase
          .from("games")
          .select("*")
          .eq("id", gameId)
          .single();

        if (error) {
          console.error("Error fetching game:", error);
        } else {
          setGame(data);
        }
      }
    };

    const fetchSubmission = async () => {
      const { data, error } = await supabase
        .from("list_item")
        .select("*")
        .eq("item_owner", userDetails?.id)
        .eq("game_id", gameId);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        if (data && data.length > 0) {
          setTrackedGame(true);
          setSelectedScore(data[0].score.toString());
          setReview(data[0].notes);
        } else {
          setTrackedGame(false);
        }
      }
    };

    fetchGame();
    fetchSubmission();
  }, [gameId, userDetails?.id]);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!user) {
      alert("You need to be logged in to submit a review.");
      return;
    }

    const submissionData = {
      item_owner: userDetails?.id,
      game_id: gameId,
      score: parseInt(selectedScore, 10),
      notes: review,
      status: selectedStatus,
    };

    let response;

    if (trackedGame) {
      response = await supabase
        .from("list_item")
        .update(submissionData)
        .eq("item_owner", userDetails?.id)
        .eq("game_id", gameId);
    } else {
      response = await supabase.from("list_item").insert([submissionData]);
    }

    if (response.error) {
      console.error("Error submitting data:", response.error);
    } else {
      alert("Submission successful!");
      setTrackedGame(true);
    }
  };

  return (
    <>
      <NavigationBar />
      <div
        className="game-bg"
        style={{
          backgroundImage: `url(${game?.cover_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="game-info-container"
          style={{ backdropFilter: "blur(5px) brightness(30%)" }}
        >
          <div className="actions">
            <div className="game-image">
              <img
                src={game?.cover_image}
                width="300"
                height="400"
                alt={game?.title}
              />
            </div>
            <div className="button-container-2"></div>
          </div>

          <div className="information">
            <div className="game-info-title">{game?.title}</div>
            <div className="game-info">{game?.description}</div>
            {user ? (
              <div className="form-container-2">
                <h1 style={{ marginBottom: "5px" }}>Your Submission</h1>
                {trackedGame ? (
                  <p style={{ marginTop: "5px" }}>
                    {" "}
                    It seems like you've already played {game?.title}! What
                    changed your mind this time?{" "}
                  </p>
                ) : (
                  <p style={{ marginTop: "5px" }}>
                    You have not played {game?.title} yet. Add it to your list
                    by doing a submission!
                  </p>
                )}

                <form onSubmit={handleSubmit}>
                  <div style={{ display: "flex" }}>
                    <div className="dropdown">
                      <label htmlFor="categoryDropdown">
                        Status - Current progress in the game:{" "}
                      </label>
                      <select
                        id="categoryDropdown"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                      >
                        <option value="">(Not Yet Playing)</option>
                        <option value="Currently Playing">
                          Currently Playing
                        </option>
                        <option value="Completed">Completed</option>
                        <option value="On Hold">On Hold</option>
                        <option value="Planning to Play">
                          Planning to Play
                        </option>
                        <option value="Dropped">Dropped</option>
                        {/* Add more categories as needed */}
                      </select>
                    </div>

                    <div className="dropdown">
                      <label htmlFor="categoryDropdown">
                        Score - How were you enjoying this game:{" "}
                      </label>
                      <select
                        id="categoryDropdown"
                        value={selectedScore}
                        onChange={(e) => setSelectedScore(e.target.value)}
                      >
                        <option value="0">(Not Yet Playing)</option>
                        <option value="10">10 (Masterpiece)</option>
                        <option value="9">9 (Exccellent)</option>
                        <option value="8">8 (Very Good)</option>
                        <option value="7">7 (Good)</option>
                        <option value="6">6 (Fine)</option>
                        <option value="5">5 (Average)</option>
                        <option value="4">4 (Bad)</option>
                        <option value="3">3 (Very Bad)</option>
                        <option value="2">2 (Horrible)</option>
                        <option value="1">1 (Unplayable)</option>
                      </select>
                    </div>
                  </div>

                  <textarea
                    className="generic-form-textarea-variant"
                    id="review-area"
                    placeholder="Maybe today's the day to leave a little review?"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  ></textarea>

                  <div
                    style={{
                      display: "flex",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <button
                      className="generic-button"
                      style={{ backgroundColor: "green" }}
                      type="submit"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                    <button
                      className="generic-button"
                      style={{ backgroundColor: "red" }}
                      type="button"
                      onClick={async () => {
                        const { error } = await supabase
                          .from("list_item")
                          .delete()
                          .eq("item_owner", userDetails?.id)
                          .eq("game_id", gameId);

                        if (error) {
                          console.error("Error deleting data:", error);
                        } else {
                          alert("Submission deleted!");
                          setTrackedGame(false);
                          setSelectedScore("");
                          setReview("");
                          setSelectedStatus("");
                        }
                      }}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <p
                style={{
                  fontSize: "21",
                  marginTop: "40px",
                  marginLeft: "18px",
                }}
              >
                {""}
                Login or sign up now to start adding {game?.title} to your list!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
