import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {user, getData} from "../store/actions";
import {UserLogin} from "../components/index"


class Navbar extends Component {

    componentDidMount(){
        let token = localStorage.getItem("token");
        if(!this.props.auth && token){
            this.props.user(token)
        }else{
            console.log("getData")
            this.props.getData();
        }

    }
    render() {
        
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

const mapDispatchToProps = (dispatch)=>{
    return{
        user: (token)=>{dispatch(user(token))},
        getData: ()=>{dispatch(getData())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

