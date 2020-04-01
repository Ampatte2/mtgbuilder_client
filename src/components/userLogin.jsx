import React, { Component } from 'react'
import {ModalLogin} from "./index"
import {connect} from "react-redux";
import {login, register} from "../store/actions";
import Loader from "react-loader";

class UserLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            passError:false
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
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
    }
    render() {
        return (
            <div>
                <Loader loaded={this.props.isLoaded}></Loader>
                
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

            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    const {isLoaded} = state;
    const {error} = state;
    return {error, isLoaded}
}
const mapDispatchToProps = (dispatch)=>{
    return{
        login: (user)=>{dispatch(login(user))},
        register: (user)=>{dispatch(register(user))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);