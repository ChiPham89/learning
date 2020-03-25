import * as React from "react";
import { connect } from "react-redux";
import { UserState } from "../redux/users/userReducer";
import { logout, LogoutAction } from "../redux/users/userActions";
import { User } from "../redux/users/user";

interface OwnProps {

}

interface ConnectorProps {
  user: User
}

interface ActionCreators {
  logout: () => LogoutAction
}

type LandingPageProps = OwnProps & ConnectorProps & ActionCreators;

class LandingPage extends React.Component<LandingPageProps, LogoutAction> {

    constructor(props:LandingPageProps) {
        super(props);
    }

    handleLogout = ():void => {
        this.props.logout();
    }

    render() {

        return (
            <div>
                <h1>Welcome {this.props.user.getDisplayName()}</h1>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

function mapStateToProps(state: UserState): ConnectorProps {
    return {
        user: state.loggedInUser
    }
}

function mapDispatchToProps(): ActionCreators {
    return {
        logout
    }
}

export default connect(mapStateToProps, logout)(LandingPage);