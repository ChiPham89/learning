import * as React from "react";
import UserCredential from "../redux/users/userCredential";
import { connect } from "react-redux";
import { login } from "../redux/users/userActions";

class Login extends React.Component<{}, UserCredential> {

  constructor(props:any) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onUsernameChange = (event:React.FormEvent<HTMLInputElement>) =>{
    this.setState({
      ...this.state,
      username: event.currentTarget.value
    })
  }

  onPasswordChange = (event:React.FormEvent<HTMLInputElement>) =>{
    this.setState({
      ...this.state,
      password: event.currentTarget.value
    })
  }

  handleLogin = () => {
    this.props.login(this.state);
  }

  render() {
    return (
      <div>
        <h1>
          Login
        </h1>
        <input className="username" value={this.state.username} onChange={this.onUsernameChange}/> <br />
        <input className="password" value={this.state.password} onChange={this.onPasswordChange}/> <br />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default connect(null, login)(Login);