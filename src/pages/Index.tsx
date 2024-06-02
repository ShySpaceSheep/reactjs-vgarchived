import NavigationBar from "../components/NavigationBar/NavigationBar";
import Hero from "../components/Hero/Hero";
import { useAuth } from "../utils/auth-context";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase-client";
import { Link } from "react-router-dom";

interface GameItem {
  id: string;
  title: string;
  description: string;
  cover_image: string;
}

export default function Index() {
  const { user } = useAuth();
  const [games, setGames] = useState<GameItem[]>([]);
  const [searchResults, setSearchResults] = useState<string>("");

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase.from("games").select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setGames(data);
      }
    };

    fetchGames();
  });

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchResults.toLowerCase())
  );

  return (
    <>
      <NavigationBar />
      {user ? <></> : <Hero />}
      <div className="container">
        <div className="search-bar">
          <input
            className="generic-form-textbox"
            type="search"
            placeholder="Search for games..."
            name="list_search"
            value={searchResults}
            onChange={(e) => setSearchResults(e.target.value)}
          />
        </div>

        <div className="game-grid-container">
          {filteredGames.map((game) => (
            <Link to={`/games/${game.id}`} key={game.id}>
              <div className="game">
                <div className="game-image">
                  <img src={game.cover_image} width="200" height="300" />
                </div>
                <div className="game-title">{game.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
