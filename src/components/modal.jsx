import React, { Component } from 'react'

export default class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false
        };
        this.showModal = this.showModal.bind(this);
    }
    showModal(){
        if(this.state.show){
            this.setState({show:false})
        }else{
            this.setState({show:true})
        }
    }
    render() {
        return (
            <>
                <img src={this.props.item["imageUrl"]} alt={this.props.item.name} onClick={this.showModal} draggable="true"></img>
                {this.state.show && <img src={this.props.item["imageUrl"]}></img>}
            </>
        )
    }
}
