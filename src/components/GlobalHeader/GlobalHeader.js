import React, {useEffect, useState} from 'react';
import "./GlobalHeader.scss"
import {useParams} from "react-router-dom";
import fetch from "node-fetch";

function GlobalHeader(props) {
    const [countState, setPlayerCount] = useState(0);
    const fetchPlayerCount = async () => {
        const response = await fetch("http://prod.darkan.org:4040/api/playersonline");
        let count = await response.text()
        console.log(count)
        setPlayerCount(count);
    };
    useEffect(() => {
        fetchPlayerCount();
    }, [countState]);
    return (
      <nav className="nav-wrapper">
          <div className="nav-container">
              <a href="/">
              <div className="player-count-container flex flex-ai-c">
                  <span id="player-count"><strong>{countState}</strong></span>
                  <p>Players Online</p>
              </div>
              </a>
              <div className="nav-links flex flex-ai-c">
                  <div className="dropdown">
                      <p className="dropbtn flex flex-ai-c">Explore<i className="fas fa-caret-down dwn-arrow"></i></p>
                      <div className="dropdown-content">
                          <ul className="dropdown-links">
                              <li><a href="https://discord.gg/RWZt5YN7H4">Discord</a></li>
                              <li><a href="https://github.com/orgs/DarkanRS/repositories" target="_blank"
                                     rel="noopener noreferrer" className="cta-developers">Github</a></li>
                          </ul>
                      </div>
                  </div>
                  <a href="/highscores/all/1">Highscores</a>
                  <div className="dropdown">
                      <p className="dropbtn flex flex-ai-c">Tools<i className="fas fa-caret-down dwn-arrow"></i></p>
                      <div className="dropdown-content">
                          <ul className="dropdown-links">
                              <li><a href="https://darkan.org/worldmap.html">World Map</a></li>
                              <li><a href="https://github.com/DarkanRS/api">API Documents</a></li>
                          </ul>
                      </div>
                  </div>
                  <a href="/assets/uploads/files/Darkan.exe" className="cta-dwnl">Download</a>
              </div>
          </div>
      </nav>
  );
}

export default GlobalHeader;
