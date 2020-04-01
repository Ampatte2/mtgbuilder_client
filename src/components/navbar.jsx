import React, { Component } from 'react'
import {Link} from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to="/">Search For a Card</Link>
                <br/>
                <Link to="/account">Go To Account</Link>
                <br/>
                <Link to="/decklists">Go To Decklists</Link>
            </div>
        )
    }
}

