import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {user, getData} from "../store/actions";
import {UserLogin} from "../components/index"
import Styled from "../style/styled"


class Navbar extends Component {

    componentDidMount(){
        let token = localStorage.getItem("token");
        if(!this.props.auth && token){
            this.props.user(token)
        }else{
            
            this.props.getData();
        }

    }
    render() {
        
        return (
            <Styled.Navbar>
                <Styled.UserButtons><Link to="/" style={{ textDecoration: 'none', color:"black",  }}>Search For a Card</Link></Styled.UserButtons>
                
                <Styled.UserButtons><Link to="/decklists" style={{ textDecoration: 'none', color:"black"  }}>Go To Decklists</Link></Styled.UserButtons>
                
                {this.props.auth && <Styled.UserButtons><Link to="/account" style={{ textDecoration: 'none', color:"black"}}>Go To Account</Link></Styled.UserButtons>}
                
                <UserLogin></UserLogin>
            </Styled.Navbar>
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

