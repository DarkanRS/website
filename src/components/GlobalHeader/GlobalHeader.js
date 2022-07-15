import React from 'react';
import "./GlobalHeader.scss"

function GlobalHeader(props) {
  return (
      <nav className="nav-wrapper">
          <div className="nav-container">
              <div className="player-count-container flex flex-ai-c">
                  <span id="player-count"><strong>100</strong></span>
                  <p>Players Online</p>
              </div>
              <div className="nav-links flex flex-ai-c">
                  <div className="dropdown">
                      <p className="dropbtn flex flex-ai-c">Explore<i className="fas fa-caret-down dwn-arrow"></i></p>
                      <div className="dropdown-content">
                          <ul className="dropdown-links">
                              <li><a href="#">Discord</a></li>
                              <li><a href="https://github.com/orgs/DarkanRS/repositories" target="_blank"
                                     rel="noopener noreferrer" className="cta-developers">Github</a></li>
                          </ul>
                      </div>
                  </div>
                  <a href="/highscores">Highscores</a>
                  <div className="dropdown">
                      <p className="dropbtn flex flex-ai-c">Tools<i className="fas fa-caret-down dwn-arrow"></i></p>
                      <div className="dropdown-content">
                          <ul className="dropdown-links">
                              <li><a href="/world-map">World Map</a></li>
                              <li><a href="/api">API Documents</a></li>
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
