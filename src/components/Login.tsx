import * as React from "react";
import { connect } from "react-redux";
import UserCredential from "../redux/users/userCredential";
import { login, LoginAction } from "../redux/users/userActions";

interface OwnProps {

}

interface ConnectorProps {
  
}

interface ActionCreators {
  login: LoginAction
}

type LoginProps = OwnProps & ConnectorProps & ActionCreators;

class Login extends React.Component<LoginProps, UserCredential> {

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

function mapDispatchToProps(): ActionCreators {
  return {
    login
  }
}

export default connect(null, mapDispatchToProps)(Login);