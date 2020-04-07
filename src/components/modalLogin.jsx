import React, { Component } from 'react'

export default class ModalLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            show:false,
        }
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
        
    }
    
    componentWillUnmount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside(event){
        if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
            this.setState({show:false})
        }
    }

    showModal(){
        if(this.state.show){
            this.setState({show:false})
        }else{
            this.setState({show:true})
        }
    }

    setWrapperRef(node){
        this.wrapperRef = node;
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.fun(this.state)
        
       
    }

    handleChange(e, section){
        let newState = {};
        newState[section]=e.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <>
                <div ref={this.setWrapperRef}>
                <button onClick={this.showModal}>
                {this.props.title}
                </button>
                {this.state.show && 
                    
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        {this.props.info.map((item, index)=>{
                           return <input type={item.type} id={item.name} placeholder={item.name} onChange={(e)=>this.handleChange(e,item.name)}></input>
                        })}
                        {this.props.error && <div>Incorrect Username or Password</div>}
                        {this.props.passError && <div>Passwords Do Not Match</div>}
                        {this.props.isLoaded &&<button type="submit">{this.props.title}</button>}
                    </form>
                    
                    }
                </div>
            </>
        )
    }
}
