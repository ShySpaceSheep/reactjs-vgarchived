import iconTracking from "./../../assets/hero-icons/icon-track.png";
import iconSocials from "./../../assets/hero-icons/icon-socials.png";
import iconIGDB from "./../../assets/hero-icons/icon-igdb.png";
import { Link } from "react-router-dom";
import FeatureCard from "./FeatureCard";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="scrolling-background">
      <div className="hero-container">
        <div className="hero-div-left">
          <p className="hero-text">
            It's time to ditch text files. Never miss what you've played before.{" "}
          </p>
          <h1 className="hero-main-header">Start tracking your games today.</h1>
          <div className="feature-list">
            <FeatureCard
              img={iconTracking}
              header="Track what you've been playing!"
              description="No need for cumbersome text files and excel sheet! Easily
                  manage, rate, review, and collect games you know."
            />

            <FeatureCard
              img={iconSocials}
              header="Share your list to the world!"
              description="Discuss and socialize with the gaming community in the forums
                  or view other users' lists and collections for an inspiration."
            />

            <FeatureCard
              img={iconIGDB}
              header="Powered by the IGDB API!"
              description="Access information of more than 200,000 games and more with the
                  power of the IGDB API from Twitch to ensure your catalogue is
                  complete."
            />
          </div>

          <Link to="/signup">
            <div className="hero-cta-element"> SIGN UP TODAY </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
