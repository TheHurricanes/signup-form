/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import fire from '../config/Fire';
import Forgot from './Forgot';
import Register from './Register';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showRegistration = this.showRegistration.bind(this);
    this.handleForgot = this.handleForgot.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      email: '',
      password: '',
      errorMsg: '',
      toRegister: false,
      toForgot: false
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
        this.setState({errorMsg: error.message});
      });
  }

  showRegistration(e){
    e.preventDefault();
    this.setState({toRegister: !this.state.toRegister});
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

  LoginView = () => {
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
								<a href="#" onClick={this.showRegistration} id="register-form-link">Sign up</a>
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
                     <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required/>
									</div>
									<div className="form-group">
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" autoComplete="off" placeholder="Password" required/>
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

  renderScreen() {
    if(this.state.toRegister) {
      return (
        <div>
          {this.state.toForgot 
            ? ( <Forgot handleForgot={this.handleForgot} />) 
            : (<Register/>)
          }
        </div>
     );
    } else {
      return (
        <div>
          {this.state.toForgot 
            ? ( <Forgot handleForgot={this.handleForgot} />) 
            // @TODO Add CSSTransition
            : (this.LoginView())} 
        </div>
     );
    }
  }
  
  render() {
    return(
      <div>{(this.renderScreen())}</div>
    )
  }
}

export default Login;