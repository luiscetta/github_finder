import { Link } from "react-router-dom";

import "./styles.scss";

export default function Homepage() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="text-content">
          <h1 className="home-title">
            Welcome to <span>Github Finder</span>.
          </h1>
          <p>
            Do you like to follow the commits of the users most loved by the
            Devs? That really robust project that he usually posts on his
            profile? You can find it here!
          </p>
          <Link to="/search" className="home-search-btn">
            Search for user
          </Link>
        </div>
      </div>
    </div>
  );
}
