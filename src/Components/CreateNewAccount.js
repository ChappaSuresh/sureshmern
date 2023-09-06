import React from "react";
// import "./App.css";
function form(){
    return(
        <div classNameName="container">
            <form>
                <div classNameName="ui-initial">
                   <h1>facebook</h1>
                </div>
                <div>
                  <h5>Facebook helps you connect and share with the people in your life</h5>
                </div>
                <div className="col-md-6">
                <label for="validationDefault" className="form-label"></label>
                <input type="text" className="form-control" id="validationDefault" required/>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto" >
                    <button className="btn btn-primary" type="button">Log in</button>
                </div>

                <div>
                    <a href="./Components/ForgotPasaword" className="stretched-link">forgotten password?</a>
                </div>

            </form>
                
                <div>
                 <p><span>Create a Page</span>for a celebrity,brand or business.</p> 
                </div>
        </div>
    )
}
export default form;