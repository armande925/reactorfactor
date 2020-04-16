import React from 'react';

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Contact</h2>
                </div>
            </div>
            <div className="row">

                <div className="col-md-4 col-sm-12" >
                    <img className="img-fluid" src="./assets/images/profile-photo.jpg" alt="imageProfile" />


                </div>
                <div className="col-md-8 col-sm-12">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Name</label>
                            <input type="name" className="form-control" id="exampleInputPassword1" placeholder="Name" />
                        </div>

                        <div className="form-group">
                            <textarea type="text" className="form-control" rows="5" cols="90" id="exampleCheck1">Please leave a message</textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Contact;