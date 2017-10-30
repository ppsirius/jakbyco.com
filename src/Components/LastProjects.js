import React, { Component } from 'react';
import '../css/LastProjects.css';

class LastProjects extends Component {
  render () {
    return (
      <div className="last-projects">
        <div className="last-project-container">
          <h2>
            Last projects:
          </h2>
          <ul className="projects-list">
            <li className="project-element">
              <a href="#" className="project-wrapper">
                <h3 className="project-title">
                  goodfoods
                </h3>
                <span className="project-description">
                  Maecenas vel tellus a urna maximus sagittis. Aenean gravida sodales mi, in fringilla metus fringilla sed. Ut aliquet, orci eget fermentum consectetur.
                </span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default LastProjects;