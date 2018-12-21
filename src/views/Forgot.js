import React, { Component } from 'react';

class Forgot extends Component {
    render() {
        return (
        <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4" ></div>
              <div className="col-sm-4" >
                <h1>Did you forgot your password?</h1>
                <p>You just fu****** yourself! <span role="img" aria-label="upside-down-face">🙃</span></p>
                <p>You can contact <b>The Hurricanes</b> team, but we probably will not reply to you back</p>
                <button onClick={this.props.handleForgot} className="btn run-whatever-login-btn">Go Back</button>
              </div>
              <div className="col-sm-4" ></div>
            </div>
          </div>
        );
    }
}

export default Forgot;
