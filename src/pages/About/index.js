import React from 'react';

function About () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>About Me</h2>
                </div>
            </div>
            <div className="row">

                <div className="col-md-4 col-sm-12">
                    <img className="img-fluid" src="./assets/images/profile-photo.jpg" alt="profileImage"/>

                </div>
                <div className="col-md-8 col-sm-12 about-text">
                    <p>Art takes form in many mediums. Music, spray paint, quisine......code. As a junior developer, I look forward
                    to
                    these opportunities. A chance at collaborating with peer and senior developers to create. A full stack
                    developer, toggling between roles, either front or back end.
                       </p>
                    <p>
                        A multifaceted approach, and the ability to play architect and designer. Allowing the process to become
                        efficient and effective, moreso, in team project settings. Elegant in it's simplicity. Powerful in it's
                        complexity. Code...the language we use to write the future. #push
                             </p>

                </div>
            </div>
        </div>
    ) 
}

export default About;