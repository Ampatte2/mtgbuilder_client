import React, { Component } from 'react'
import {ModalLogin} from "./index"
import {connect} from "react-redux";
import {login, logout, register, isAuth, getData} from "../store/actions";
import Loader from "react-loader";



class UserLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            passError:false
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    register(submit){
        console.log("register", submit)
            if(submit["Password"]===submit["Repeat Password"]){
                this.props.register(submit);
            }else{
                //error message for password without api call
                this.setState({passError:true});
        }
    }
    
    login(submit){
        this.props.login(submit);
        console.log(localStorage.getItem("state"))
    }

    logout(){
        
        localStorage.removeItem("token")
        this.props.logout();
        this.props.isAuth(false);
        this.props.getData();
        
    }

    render() {
        return (
            <div>
                <Loader loaded={this.props.isLoaded}></Loader>
                {!this.props.auth && 
                <>
                    <ModalLogin 
                    title="Login" 
                    info={[{name:"Email", type:"email"},
                    {name:"Password", type:"password"}]}
                    fun={this.login}
                    error={this.props.error}
                    isLoaded={this.props.isLoaded}>
                    </ModalLogin>

                    <ModalLogin
                    title="Register"
                    info={[{name:"Email", type:"email"},
                    {name:"Password", type:"password"},
                    {name:"Repeat Password", type:"password"}]}
                    fun={this.register}
                    passError={this.state.passError}
                    error={this.props.error}
                    isLoaded={this.props.isLoaded}>
                    </ModalLogin>
                </>}

                {this.props.auth &&<button onClick={()=>this.logout()}>Logout</button>}
                

            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    const {isLoaded} = state;
    const {error} = state;
    const {auth} = state;
    return {error, isLoaded, auth}
}
const mapDispatchToProps = (dispatch)=>{
    return{
        login: (user)=>{dispatch(login(user))},
        register: (user)=>{dispatch(register(user))},
        isAuth: (value)=>{dispatch(isAuth(value))},
        logout: ()=>{dispatch(logout())},
        getData: ()=>{dispatch(getData())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);