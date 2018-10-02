import React from 'react';
import firebase from '../firebase/firebase';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          loginEmail: '',
          loginPassword: '',
          error: '',
        };
    }

    emailChange = (e) => {
        let email = e.target.value;
        this.setState(() => {
            return { email: email };
        })
    }
    passwordChange = (e) => {
        let password = e.target.value;
        this.setState(() => {
            return { password: password };
        })
    }
    loginEmailChange = (e) => {
        let  loginEmail = e.target.value;
        this.setState(() => {
            return { loginEmail: loginEmail };
        })
    }
    loginPasswordChange = (e) => {
        let loginPassword = e.target.value;
        this.setState(() => {
            return { loginPassword: loginPassword };
        })
    }
    signup = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            
        })
        .catch((error) => {
            console.log(error);
          });
      }
    login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.loginEmail, this.state.loginPassword).then((u)=>{
        }).catch((error) => {
          this.setState(() => {
            return { error: 'Wrong email or password!' }
          })
            console.log(error);
          });
    }

    render() {
        return (
            <div className="container">
                <div className="auth">
                    <div className="login">
                        <h2>Log In</h2>
                        <form>
                            <ul>
                                <li>
                                    <label>Email:</label>
                                    <input value={this.state.loginEmail} onChange={this.loginEmailChange} type="email" />
                                </li>
                                <li>
                                    <label>Password:</label>
                                    <input value={this.state.loginPassword} onChange={this.loginPasswordChange} type="password" />
                                </li>
                                <li>
                                    <button onClick={this.login}>Log In</button>
                                </li>
                            </ul>                        
                        </form>
                    </div>
                    <div className="login">
                        <h2>Sign Up</h2>
                        <form>
                            <ul>
                                <li>
                                    <label>Email:</label>
                                    <input value={this.state.email} onChange={this.emailChange} type="email" />
                                </li>
                                <li>
                                    <label>Password:</label>
                                    <input value={this.state.password} onChange={this.passwordChange} type="password" />
                                </li>
                                <li>
                                    <button onClick={this.signup}>Sign Up</button>
                                </li>
                            </ul>                        
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;