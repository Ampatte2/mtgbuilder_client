import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {user} from "../store/actions";
import {UserLogin} from "../components/index"


class Navbar extends Component {
    render() {
        let token = localStorage.getItem("token");
        if(!this.props.auth && token){
            this.props.user(token)
        }
        return (
            <div>
                <Link to="/">Search For a Card</Link>
                <br/>
                <Link to="/decklists">Go To Decklists</Link>
                <br/>
                {this.props.auth && <Link to="/account">Go To Account</Link>}
                <br/>
                <UserLogin></UserLogin>
            </div>
        )
    }
}
const mapStateToProps= state =>{
    const {auth} = state
    return {auth}
}

export default connect(mapStateToProps, {user})(Navbar)

