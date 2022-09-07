import React from 'react';

<img className="mx-auto d-block border"  src={require('../../images/ResumeScreenshot.png')} alt="resume"></img>

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <ul className="list-group bg-info">
                <li className="list-group-item"><a href="https://github.com/ChrisDuhaime/password_generator">Password
                        Generator</a><span className="iconify" data-icon="fluent:password-24-regular"></span> <a
                        href="https://chrisduhaime.github.io/password_generator/">Live Website</a></li>
                <img src={require("../../images/Screenshot of Password Generator.jpg")} alt="Screenshot of Password Generator"
                    className="Screenshots"></img>
                <li className="list-group-item"><a href="https://github.com/ChrisDuhaime/code-quiz">Code Quiz</a><span
                        className="iconify" data-icon="fluent:quiz-new-28-regular"></span><a
                        href="https://chrisduhaime.github.io/code-quiz/">Live Website</a></li>
                <img src={require("../../images/Screenshot of Code Quiz.jpg")} alt="Screenshot of Code Quiz" className="Screenshots"></img>
                <li className="list-group-item"><a href="https://github.com/ChrisDuhaime/day-planner">Day Planner</a><span
                        className="iconify" data-icon="ant-design:schedule-twotone"></span><a
                        href="https://chrisduhaime.github.io/day-planner/">Live Website</a></li>
                <img src={require("../../images/Screenshot of day-planner website.jpg")} alt="Screenshot of Day Planner" className="Screenshots"></img>
                <li className="list-group-item"><a href="https://github.com/ChrisDuhaime/weather-forcast">Weather
                        Dashboard</a><span className="iconify" data-icon="arcticons:weather-forecast"></span><a
                        href="https://chrisduhaime.github.io/weather-forcast/">Live Website</a></li>
                <img src={require("../../images/Screenshot weather dashboard.jpg")} alt="Screenshot of Weather Forecast" className="Screenshots"></img>
                <li className="list-group-item"><a href="https://github.com/Jay3172/Find_Dry_Chargers">Find Dry Chargers
                        (Group Project)</a><span className="iconify" data-icon="ic:twotone-electric-car"></span><a
                        href="https://jay3172.github.io/Find_Dry_Chargers/">Live Website</a></li>
                <img src={require("../../images/screenshot Find Dry Chargers.png")} alt="Screenshot of Find Dry Find Dry Chargers"
                    className="Screenshots"></img>
                <li className="list-group-item"><a href="https://github.com/603collective/Group-Project-2--Likin-Hikin">Likin Hikin
                        (Group Project)</a><span className="iconify" data-icon="mdi:hiking"></span><a
                        href="https://infinite-cove-32728.herokuapp.com/">Live Website</a></li>
                <img src={require("../../images/Screenshot LIkin Hikin.png")} alt="Screenshot of Likin Hikin" className="Screenshots"></img>
            </ul>

    </div>
  );
}
