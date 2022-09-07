import React from 'react';
import resume from '../../../src/Chris Duhaime Resume.odt';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      
      <a href={resume} download="Chris Duhaime Resume.odt"> Download Here </a>
 
      <img className="mx-auto d-block border"  src={require('../../images/ResumeScreenshot.png')} alt="resume"></img>
    </div>
  );
}
