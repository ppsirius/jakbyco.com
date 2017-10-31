import React, { Component } from 'react';
import Content from '../content.json';
import '../css/LastProjects.css';

class LastProjects extends Component {

  render () {
    return (
      <div className="last-projects">
        <div className="last-project-container">
          <h2 className="headline last-project-headline">
            Last projects:
          </h2>
          <ul className="projects-list">
            {Content.projects.map(item => {
              return (
                <li className="project-element">
                  <a href={item.link} className="project-container">
                    <h3 className="headline project-title">
                      {item.title}
                    </h3>
                    <span className="project-description">
                      {item.description}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    )
  }
}

export default LastProjects;