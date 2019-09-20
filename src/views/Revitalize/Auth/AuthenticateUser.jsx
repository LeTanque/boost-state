import React from 'react';
import { 
    withRouter, 
    Redirect, 
    Route, 
} from "react-router-dom";
// import jwt from "jsonwebtoken";
import jwtdecode from "jwt-decode";




class AuthenticateUser extends React.Component {
    
    
    
    
    componentDidMount() {
        const token = this.props.match.params.token.replace("#", "");
        const decoded = jwtdecode(token);
        
        console.log(token);
        
        if(Date.now() / 1000 > decoded.exp) {
            localStorage.removeItem("token");
            this.props.history.push("/login");
        }
        else {
            localStorage.setItem("token", token)
            this.props.history.push("/dashboard");
        }
    }

    render() {
        return (
            <>
                
            </>
        );
        
    }

}

        



export default withRouter(AuthenticateUser);

