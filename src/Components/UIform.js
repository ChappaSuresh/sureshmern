import React from "react";
// import "./App.css";
function uiform(){
    return(
        <div className="container">
            <form>
                <div className="ui-initial">
                <h1>facebook</h1>
                <h5>Facebook helps you connect and share with the people in your life</h5>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Email or phone number"/>
                     <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button">Log in</button>
                </div>

                <div>
                    <a href="./Components/ForgotPassword" class="stretched-link">forgotten password?</a>
                </div>

                <hr></hr>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button">Button</button>
                    <button class="btn btn-primary" type="button">Button</button>
                </div>
            </form>
                
                <div>
                 <p><span>Create a Page</span>for a celebrity,brand or business.</p> 
                </div>
        </div>
    )
}
export default uiform;