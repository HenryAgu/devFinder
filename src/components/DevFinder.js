// stylesheet
import "./DevFinder.css";

// React Helmet
import { Helmet } from "react-helmet";

// React hooks
import { useState } from "react";

// React icons
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

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
        </div>
      </div>
    </div>
  );
};

export default DevFinder;
