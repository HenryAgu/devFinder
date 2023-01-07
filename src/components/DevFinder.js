// stylesheet
import "./DevFinder.css";

// React Helmet
import { Helmet } from "react-helmet";

// React hooks
import { useState } from "react";

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
      <div className="git_card">

      </div>
    </div>
  );
};

export default DevFinder;
