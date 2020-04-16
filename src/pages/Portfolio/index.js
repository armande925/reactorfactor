import React from 'react';

function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Portfolio</h2>
                </div>
            </div>
            <div className="row">

                <div className="col-md-4 col-sm-12" >
                    <img className="img-fluid" src="/assets/images/profile-photo.jpg" alt="profilePic"/>


                </div>
                    <div className="col-md-8 col-sm-12" id="port-photo">
                        <div className="row">
                            <div className="col-md-6"><img className="img-fluid" src="/assets/images/Port 1.jpeg" alt="cyberphoto"/></div>
                                <div className="col-md-6"><img className="img-fluid" src="/assets/images/port 2.jpeg" alt="cyberphoto"/></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6"><img className="img-fluid" src="/assets/images/Port 1.jpeg" alt="cyberphoto"/></div>
                                        <div className="col-md-6"><img className="img-fluid" src="/assets/images/port 4.jpeg" alt="cyberphoto"/></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
    ) 
}

export default Portfolio;