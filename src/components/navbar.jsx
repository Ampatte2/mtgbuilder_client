import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to="/">Search For a Card</Link>
                <br/>
                <Link to="/account">Go To Account</Link>
            </div>
        )
    }
}

export default connect()(Navbar)
