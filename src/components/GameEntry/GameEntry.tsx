import "./game-entry.css";
import TestImage from "../../assets/test/valo.png";

interface GameProps {
  imgLink: string;
  title: string;
}

export default function GameEntry() {
  return (
    <div className="game-entry">
      <div className="game-image">
        <img src={TestImage} width="200" height="300" />
      </div>
      <div className="game-title">Lorem ipsum docet</div>
    </div>
  );
}
