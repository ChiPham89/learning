import * as React from "react";
import { connect } from "react-redux";
import Login from "./components/Login";
import { UserState } from "./redux/users/userReducer";

class LoginExample extends React.Component<UserState,{}> {

    constructor(props:UserState) {
        super(props);
    }
    
    render() {
        const activePage:JSX.Element = this.props.loggedInUser.getUserName() === "" ? (<Login/>) : (<div></div>);

        return (
            <div>
                {activePage}
            </div>
        );
    }
}

const mapStateToProps = (state:UserState) => {
    return state;
}

export default connect(mapStateToProps)(LoginExample);