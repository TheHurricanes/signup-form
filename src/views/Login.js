import React, { Component } from 'react';
import fire from '../config/Fire';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Forgot from './Forgot';
import App from '../App';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showRegistration = this.showRegistration.bind(this);
    this.handleForgot = this.handleForgot.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

  showLogin(e){
    e.preventDefault();
    console.log('show login button clicked');
}

  showRegistration(e){
        e.preventDefault();
        console.log('show registration button clicked');
  }

  handleForgot(e) {
    e.preventDefault();
    console.log('show forgot button clicked');
    return(
      <div>{( <Forgot/>)}</div>
    );
  }

  renderViewAdvanced = () => {
    return(
        <div className="container">
  <div className="row">
    <div className="col-sm-3" ></div>
    <div className="col-sm-6" >
    <div className="col-sd-6 col-md-offset-3">
				<div className="panel panel-login">
					<div className="panel-heading">
						<div className="row">
							<div className="col-sm-6">
								<a  href="#" className="active" onClick={this.showLogin} id="login-form-link">Login</a>
							</div>
							<div className="col-sm-6">
								<a href="#" onClick={this.showRegistration} id="register-form-link">Register</a>
							</div>
						</div>
          <hr></hr>
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-lg-12">
								<form id="login-form" method="post" style={{display: 'block'}}>
									<div className="form-group">
                     <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
									</div>
									<div className="form-group">
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
									</div>
                    <button type="submit" onClick={this.login} className="btn run-whatever-login-btn">Login</button>
									<div className="form-group">
										<div className="row">
											<div className="col-lg-12">
												<div className="text-center">
                          <a href="#" onClick={this.handleForgot} tabIndex="5" className="forgot-password">Forgot Password?</a>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
    <div className="col-sm-3" ></div>
  </div>
</div>
    );
  };


  renderView = () => {
      return(
        <div className="col-md-6">
       <form>
      <div className="form-group">
       <label htmlhtmlFor="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
       <div className="form-group">
      <label htmlhtmlFor="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
    </form>
    </div>
    );
  }

  render() {
    return (
       <div>
           {this.renderViewAdvanced()}
       </div>
    );
  }
}
export default Login;




// <form id="register-form" action="orm.runwhatever.hurricanes.ga/register/process" method="post" style={{display: 'none'}}>
// 									<div className="form-group">
// 										<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value=""/>
// 									</div>
// 									<div className="form-group">
// 										<input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" value=""/>
// 									</div>
// 									<div className="form-group">
// 										<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password"/>
// 									</div>
// 									<div className="form-group">
// 										<input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password"/>
// 									</div>
// 									<div className="form-group">
// 										<div className="row">
// 											<div className="col-sm-6 col-sm-offset-3">
// 												<input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now"/>
// 											</div>
// 										</div>
// 									</div>
// 								</form>