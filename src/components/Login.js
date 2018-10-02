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
          message: ''
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
            switch (error.code) {
                case 'auth/email-already-in-use':
                    this.setState(() => {
                        return { message: `Email address ${this.state.email} already in use.`}
                    });
                  break;
                case 'auth/invalid-email':
                    this.setState(() => {
                        return { message: `Email address ${this.state.email} is invalid.`}
                    });
                  break;
                case 'auth/operation-not-allowed':
                    this.setState(() => {
                        return { message: `Error during sign up.`}
                    });
                  break;
                case 'auth/weak-password':
                    this.setState(() => {
                        return { message: 'The password must have at least 6 characters'}
                    });
                  break;
                default:
                  console.log(error.message);
              }
          });
      }
    login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.loginEmail, this.state.loginPassword).then((u)=>{
        }).catch((error) => {
          this.setState(() => {
            return { error: 'Wrong email or password!' }
          })
        });
    }

    render() {
        return (
            <div className="container">
                <div className="auth">
                    <div className="login">
                        <h2>Log In</h2>
                        {this.state.error && <p className="login-error">{this.state.error}</p>}
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
                        {this.state.message && <p className="login-error">{this.state.message}</p>}
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