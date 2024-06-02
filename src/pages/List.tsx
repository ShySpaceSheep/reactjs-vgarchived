import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../utils/supabase-client";
import { useAuth } from "../utils/auth-context";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import "./list.css";
import logo from "../assets/logo-large.png";
import green from "../assets/ui/green.png";
import blue from "../assets/ui/blue.png";
import red from "../assets/ui/red.png";
import gray from "../assets/ui/gray.png";
import yellow from "../assets/ui/yellow.png";

interface ListItem {
  id: number;
  game_id: string;
  score: number;
  notes: string;
}

export default function List() {
  const { userDetails } = useAuth();

  const { userId }: { userId?: string } = useParams();
  const [isOwner, setIsOwner] = useState(false);
  const [userUUID, setUserUUID] = useState("");
  const [playingCount, setPlayingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [onHoldCount, setOnHoldCount] = useState(0);
  const [planningCount, setPlanningCount] = useState(0);
  const [droppedCount, setDroppedCount] = useState(0);
  const [playing, setPlaying] = useState<ListItem[]>([]);
  const [completed, setCompleted] = useState<ListItem[]>([]);
  const [onHold, setHold] = useState<ListItem[]>([]);
  const [plannning, setPlanning] = useState<ListItem[]>([]);
  const [dropped, setDropped] = useState<ListItem[]>([]);

  const [gameData, setGameData] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchData = async (gameID: string) => {
      const { data, error } = await supabase
        .from("games")
        .select("*")
        .eq("id", gameID);

      if (error) {
        console.error("Error fetching game data:", error);
      } else {
        setGameData((prevState) => ({
          ...prevState,
          [gameID]: data[0], // Assuming only one game is returned
        }));
      }
    };

    [completed, playing, onHold, plannning, dropped].forEach((statusGames) => {
      statusGames.forEach((game) => {
        fetchData(game.game_id);
      });
    });
  }, [completed, playing, onHold, plannning, dropped]);

  // Please look away, 1 day things
  useEffect(() => {
    const fetchUserUUID = async () => {
      const { data: userData, error } = await supabase
        .from("users")
        .select("id")
        .eq("username", userId)
        .single();

      if (error) {
        console.error("Error fetching userUUID:", error);
      } else {
        setUserUUID(userData?.id || "");
      }
    };

    if (userId) {
      fetchUserUUID();
    }
  }, [userId]);

  useEffect(() => {
    const fetchCompletedGames = async () => {
      const { data, count, error } = await supabase
        .from("list_item")
        .select("*", { count: "exact" })
        .eq("item_owner", userUUID)
        .eq("status", "Completed");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setCompletedCount(count || 0);
        setCompleted(data);
        console.log(completed);
      }
    };
    const fetchCurrentlyPlayingGames = async () => {
      const { data, count, error } = await supabase
        .from("list_item")
        .select("*", { count: "exact" })
        .eq("item_owner", userUUID)
        .eq("status", "Currently Playing");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setPlayingCount(count || 0);
        setPlaying(data);
      }
    };
    const fetchOnHoldGames = async () => {
      const { data, count, error } = await supabase
        .from("list_item")
        .select("*", { count: "exact" })
        .eq("item_owner", userUUID)
        .eq("status", "On Hold");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setOnHoldCount(count || 0);
        setHold(data);
      }
    };
    const fetchPlanningGames = async () => {
      const { data, count, error } = await supabase
        .from("list_item")
        .select("*", { count: "exact" })
        .eq("item_owner", userUUID)
        .eq("status", "Planning to Play");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setPlanningCount(count || 0);
        setPlanning(data);
      }
    };
    const fetchDroppedGames = async () => {
      const { data, count, error } = await supabase
        .from("list_item")
        .select("*", { count: "exact" })
        .eq("item_owner", userUUID)
        .eq("status", "Dropped");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setDroppedCount(count || 0);
        setDropped(data);
        console.log(dropped);
      }
    };

    fetchCompletedGames();
    fetchCurrentlyPlayingGames();
    fetchDroppedGames();
    fetchOnHoldGames();
    fetchPlanningGames();
  }, [userUUID]);

  useEffect(() => {
    if (userId == userDetails?.username) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [userDetails]);

  const getGameData = async (gameID: string) => {
    const { data, error } = await supabase
      .from("games")
      .select("*")
      .eq("id", gameID);

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      return data;
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="container">
        <header>
          <img src={logo} />
          <h1 style={{ color: "white" }}>
            {" "}
            How many games have you played in your life?{" "}
          </h1>
        </header>
        <h1
          style={{
            marginBottom: "5px",
            fontWeight: "bolder",
            textAlign: "center",
            fontSize: "48px",
            color: "black",
          }}
        >
          {" "}
          Viewing {userId}'s Game List{" "}
        </h1>
        <div className="content">
          <div className="status-count-box">
            <div className="count-displayer">
              <div className="status-icon"> </div>
              <div className="display-title"> All </div>
              <div id="all-counter" className="display-count">
                {" "}
                {completedCount +
                  playingCount +
                  onHoldCount +
                  planningCount +
                  droppedCount}{" "}
              </div>
            </div>
            <div className="count-displayer">
              <div className="status-icon">
                <img src={green} width="13" height="13" />
              </div>
              <div className="display-title"> Currently Playing </div>
              <div id="cp-counter" className="display-count">
                {" "}
                {playingCount}{" "}
              </div>
            </div>
            <div className="count-displayer">
              <div className="status-icon">
                <img src={blue} width="13" height="13" />
              </div>
              <div className="display-title"> Completed </div>
              <div id="com-counter" className="display-count">
                {" "}
                {completedCount}{" "}
              </div>
            </div>
            <div className="count-displayer">
              <div className="status-icon">
                <img src={yellow} width="13" height="13" />
              </div>
              <div className="display-title"> On Hold </div>
              <div id="oh-counter" className="display-count">
                {" "}
                {onHoldCount}{" "}
              </div>
            </div>
            <div className="count-displayer">
              <div className="status-icon">
                <img src={gray} width="13" height="13" />
              </div>
              <div className="display-title"> Planning to Play </div>
              <div id="ptp-counter" className="display-count">
                {" "}
                {planningCount}{" "}
              </div>
            </div>
            <div className="count-displayer">
              <div className="status-icon">
                <img src={red} width="13" height="13" />
              </div>
              <div className="display-title"> Dropped </div>
              <div id="dr-counter" className="display-count">
                {" "}
                {droppedCount}{" "}
              </div>
            </div>
          </div>

          <div className="game-list">
            <div className="tabular-data">
              <h2> Currently Playing </h2>
              {playingCount > 0 ? (
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th style={{ width: "10%" }}>#</th>
                      <th style={{ width: "75%", textAlign: "left" }}>Title</th>
                      <th style={{ width: "15%" }}>Score</th>
                      <th style={{ width: "5%" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {playing.map((game, index) => (
                      <tr key={game.game_id}>
                        <td style={{ textAlign: "center" }}>
                          <img
                            src={gameData[game.game_id]?.cover_image}
                            className="game-list-image"
                          />
                        </td>
                        <td>
                          {gameData[game.game_id]?.title}
                          <p className="review-paragraph">{game.notes}</p>
                        </td>
                        <td style={{ textAlign: "center" }}> {game.score} </td>
                        <td style={{ textAlign: "center" }}> </td>
                        <td style={{ textAlign: "center" }}>
                          {" "}
                          {isOwner ? (
                            <Link to={`/games/${game.game_id}`}>
                              <button>Edit</button>
                            </Link>
                          ) : (
                            ""
                          )}{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1 style={{ textAlign: "center", color: "grey" }}>
                  {/* Render content when playingCount is 0 */}
                  YOU HAVE NO GAMES TO PLAY
                </h1>
              )}
            </div>

            <div className="tabular-data">
              <h2>Completed</h2>
              {completedCount > 0 ? (
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th style={{ width: "10%" }}>#</th>
                      <th style={{ width: "70%", textAlign: "left" }}>Title</th>
                      <th style={{ width: "15%" }}>Score</th>
                      <th style={{ width: "5%" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {completed.map((game, index) => (
                      <tr key={game.game_id}>
                        <td style={{ textAlign: "center" }}>
                          <img
                            src={gameData[game.game_id]?.cover_image}
                            className="game-list-image"
                          />
                        </td>
                        <td>
                          {gameData[game.game_id]?.title}
                          <p className="review-paragraph">{game.notes}</p>
                        </td>
                        <td style={{ textAlign: "center" }}> {game.score} </td>
                        <td style={{ textAlign: "center" }}>
                          {" "}
                          {isOwner ? (
                            <Link to={`/games/${game.game_id}`}>
                              <button>Edit</button>
                            </Link>
                          ) : (
                            ""
                          )}{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1 style={{ textAlign: "center", color: "grey" }}>
                  YOU HAVE NO COMPLETED GAMES
                </h1>
              )}
            </div>

            <div className="tabular-data">
              <h2> On Hold </h2>
              {onHoldCount > 0 ? (
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th style={{ width: "10%" }}>#</th>
                      <th style={{ width: "75%", textAlign: "left" }}>Title</th>
                      <th style={{ width: "15%" }}>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {onHold.map((game, index) => (
                      <tr key={game.game_id}>
                        <td style={{ textAlign: "center" }}>
                          <img
                            src={gameData[game.game_id]?.cover_image}
                            className="game-list-image"
                          />
                        </td>
                        <td>
                          {gameData[game.game_id]?.title}
                          <p className="review-paragraph">{game.notes}</p>
                        </td>
                        <td style={{ textAlign: "center" }}> {game.score} </td>
                        <td style={{ textAlign: "center" }}> </td>
                        <td style={{ textAlign: "center" }}>
                          {" "}
                          {isOwner ? (
                            <Link to={`/games/${game.game_id}`}>
                              <button>Edit</button>
                            </Link>
                          ) : (
                            ""
                          )}{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1 style={{ textAlign: "center", color: "grey" }}>
                  {/* Render content when playingCount is 0 */}
                  YOU HAVE NO GAMES SET ASIDE
                </h1>
              )}
            </div>

            <div className="tabular-data">
              <h2> Planning to Play </h2>
              {planningCount > 0 ? (
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th style={{ width: "10%" }}>#</th>
                      <th style={{ width: "75%", textAlign: "left" }}>Title</th>
                      <th style={{ width: "15%" }}>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plannning.map((game, index) => (
                      <tr key={game.game_id}>
                        <td style={{ textAlign: "center" }}>
                          <img
                            src={gameData[game.game_id]?.cover_image}
                            className="game-list-image"
                          />
                        </td>
                        <td>
                          {gameData[game.game_id]?.title}
                          <p className="review-paragraph">{game.notes}</p>
                        </td>
                        <td style={{ textAlign: "center" }}> {game.score} </td>
                        <td style={{ textAlign: "center" }}> </td>
                        <td style={{ textAlign: "center" }}>
                          {" "}
                          {isOwner ? (
                            <Link to={`/games/${game.game_id}`}>
                              <button>Edit</button>
                            </Link>
                          ) : (
                            ""
                          )}{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1 style={{ textAlign: "center", color: "grey" }}>
                  {/* Render content when playingCount is 0 */}
                  YOU HAVE NO GAMES PLANNED TO PLAY
                </h1>
              )}
            </div>

            <div className="tabular-data">
              <h2> Dropped </h2>
              {droppedCount > 0 ? (
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th style={{ width: "10%" }}>#</th>
                      <th style={{ width: "75%", textAlign: "left" }}>Title</th>
                      <th style={{ width: "15%" }}>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dropped.map((game, index) => (
                      <tr key={game.game_id}>
                        <td style={{ textAlign: "center" }}>
                          <img
                            src={gameData[game.game_id]?.cover_image}
                            className="game-list-image"
                          />
                        </td>
                        <td>
                          {gameData[game.game_id]?.title}
                          <p className="review-paragraph">{game.notes}</p>
                        </td>
                        <td style={{ textAlign: "center" }}> {game.score} </td>
                        <td style={{ textAlign: "center" }}> </td>
                        <td style={{ textAlign: "center" }}>
                          {" "}
                          {isOwner ? (
                            <Link to={`/games/${game.game_id}`}>
                              <button>Edit</button>
                            </Link>
                          ) : (
                            ""
                          )}{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1 style={{ textAlign: "center", color: "grey" }}>
                  {/* Render content when playingCount is 0 */}
                  YOU HAVE NOT DROPPED ANY GAMES YET
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
