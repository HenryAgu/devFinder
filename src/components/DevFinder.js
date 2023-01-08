// stylesheet
import "./DevFinder.css";

// React Helmet
import { Helmet } from "react-helmet";

// React hooks
import { useState } from "react";

// React icons
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// Images
import githubProfileImage from "../images/githubuserimage.svg";

const DevFinder = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "darkmode" : "lightmode"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome | DevFinder</title>
        <link rel="canonical" href="https://search-gitname.netlify.app/" />
      </Helmet>
      {/* Github search Card */}
      <div className="git_card_section">
        <div className="git_card">
          <div className="card_header">
            <div className="logo">
              <p>devfinder</p>
            </div>
            <div className="theme_switch">
              <p>{darkMode ? "Dark" : "Light"}</p>
              <span
                className="inner_switch"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </span>
            </div>
          </div>
          <div className={darkMode ? "dark_git_search" : "light_git_search"}>
            <div className="git_search_bar">
              <FaSearch className="search_icon"/>
              <input type="text" placeholder="Search Github username..." />
            </div>
            <div className="git_search_button">
                <button>Search</button>
            </div>
          </div>
          <div className={darkMode ? "dark_git_user_content" : "light_git_user_content"}>
                <div className="git_user_content_card">
                    <div className="git_user_image">
                        <img src={githubProfileImage} alt="githubProfileImage" />
                    </div>
                    <div className="git_user_details">
                        {/* This contains the users bio(name and bio) */}
                        <div className="git_user_name_and_bio">
                            <h4>No Name</h4>
                            <span className="username">No Username</span>
                            <p className="bio">This profile has no bio</p>
                        </div>
                        {/* This contains repo,followers and following */}
                        <div className="git_user_repo_and_following">
                            <div className="repo">
                                <h3>Repos</h3>
                                <p>0</p>
                            </div>
                            <div className="followers">
                                <h3>Followers</h3>
                                <p>0</p>
                            </div>
                            <div className="following">
                                <h3>Following</h3>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevFinder;
