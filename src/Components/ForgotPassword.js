
import React from "react";
// import "./App.css";
function forgotpassword(){
    return(

        <div className="container">
                  <nav class="navbar navbar-expand-lg navbar-primary bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href={"/Components/uiform"}>Facebook</a>
                <button class="btn btn-outline-success" type="submit">Log in</button>
            </div>
            </nav>

            <div>
            <form>
                <div className="ui-initial">
                <h1>Find Your Account</h1>
                </div>
                <hr></hr>
                <div class="form-floating mb-3">
                <h5>Please enter your email address or mobile number to search for your account.</h5>
                 <input type="email" class="form-control" id="floatingInput" placeholder="Email or phone number"/>
                <label for="floatingInput">Email address</label>
                </div>
                <hr></hr>
                <button type="button" class="btn btn-secondary btn-lg" disabled>Cancel</button>
                <button type="button" class="btn btn-lg btn-primary" disabled>Search</button>
                </form>
                </div>
        </div>
    )
}
export default forgotpassword;