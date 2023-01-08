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
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

// Axios
import axios from "axios";

// Images
import githubProfileImage from "../images/githubuserimage.svg";

const DevFinder = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState("");
  const [data, setData] = useState("")

  const gitSubmitHandler = () => {
    //   API Get Request
    axios.get(`https://api.github.com/users/${user}`).then((resp) => {
      console.log(resp.data);
      setData(resp.data);
    });
  };
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
              <FaSearch className="search_icon" />
              <input
                type="text"
                placeholder="Search Github username..."
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="git_search_button">
              <button onClick={gitSubmitHandler}>Search</button>
            </div>
          </div>
          <div
            className={
              darkMode ? "dark_git_user_content" : "light_git_user_content"
            }
          >
            <div className="git_user_content_card">
              <div className="git_user_image">
                <img src={ data.avatar_url ? data.avatar_url : githubProfileImage} alt="githubProfileImage" />
              </div>
              <div className="git_user_details">
                {/* This contains the users bio(name and bio) */}
                <div className="git_user_name_and_bio">
                  <h4>{data.name ? data.name : "No Name"}</h4>
                  <span className="username">{data.login ? data.login : "No Username"}</span>
                  <p className="bio">{data.bio ? data.bio : "This profile has no bio"}</p>
                </div>
                {/* This contains repo,followers and following */}
                <div className="git_user_repo_and_following">
                  <div className="repo">
                    <h3>Repos</h3>
                    <p>{data.public_repos ? data.public_repos : 0}</p>
                  </div>
                  <div className="followers">
                    <h3>Followers</h3>
                    <p>{data.followers ? data.followers : 0}</p>
                  </div>
                  <div className="following">
                    <h3>Following</h3>
                    <p>{data.following ? data.following : 0}</p>
                  </div>
                </div>
                {/*  Contains Information on User Address   */}
                <div className="git_user_address_card">
                  <div className="inner_address">
                    <FaMapMarkerAlt />
                    <p>{data.location ? data.location : "No Location"}</p>
                  </div>
                  <div className="inner_address">
                    <FaTwitter />
                    <p>{data.twitter_username ? data.twitter_username : "Not Available"}</p>
                  </div>
                  <div className="inner_address">
                    <FaLink />
                    <a href={data.blog ? data.blog : "https://search-gitname.netlify.app/"}>Blog</a>
                  </div>
                  <div className="inner_address">
                    <FaBuilding />
                    <p>{data.company ? data.company : "No company"}</p>
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
