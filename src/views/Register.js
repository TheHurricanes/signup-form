/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import fire from '../config/Fire';
import Forgot from './Forgot';
import Login from './Login';

class Register extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.handleForgot = this.handleForgot.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      email: '',
      password: '',
      errorMsg: '',
      toLogin: false,
      toForgot: false
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error.message);
        this.setState({errorMsg: error.message});
      })
  }

  showLogin(e){
    e.preventDefault();
    this.setState({toLogin: !this.state.toLogin});
  }

  handleForgot(e) {
    e.preventDefault();
    this.setState({toForgot: !this.state.toForgot});
  }

  handleError(){
      if(this.state.errorMsg === '') {
        return(<div></div>);
      } else {
        return(<div className="alert alert-danger" role="alert">{this.state.errorMsg}</div>);
      }
  }
  
  RegisterView = () => {
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
								<a  href="#" onClick={this.showLogin} id="login-form-link">Login</a>
							</div>
							<div className="col-sm-6">
								<a href="#"  className="active" onClick={this.showLogin} id="register-form-link">Sign up</a>
							</div>
						</div>
            <hr></hr>
					  </div>
            <div className="panel-body">
            {this.handleError()}
            <div className="row">
							<div className="col-lg-12">
								<form id="login-form" method="post" style={{display: 'block'}}>
									<div className="form-group">
                     <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
									</div>
									<div className="form-group">
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" autoComplete="off" placeholder="Password" />
									</div>
                    <button type="submit" onClick={this.signup} className="btn run-whatever-login-btn">Sign up</button>
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

  renderScreen() {
    if(this.state.toLogin) {
      return (
        <div>
          {this.state.toForgot 
            ? ( <Forgot handleForgot={this.handleForgot} />) 
            : (<Login/>)
          }
        </div>
     );
    } else {
      return (
        <div>
          {this.state.toForgot 
            ? ( <Forgot handleForgot={this.handleForgot} />) 
            // @TODO Add CSSTransition
            : (this.RegisterView())} 
        </div>
     );
    }
  }
  
  render() {
    return(
      <div>{(this.renderScreen())}</div>
      // <h1>ksdflj</h1>
    )
  }
}

export default Register;