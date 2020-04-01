import React, { Component } from 'react'

export default class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false
        };
        this.showModal = this.showModal.bind(this);
        this.dragId = this.dragId.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    
    componentWillUnmount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    showModal(){
        if(this.state.show){
            this.setState({show:false})
        }else{
            this.setState({show:true})
        }
    }

    dragId(e){
        const cardItem = JSON.stringify(this.props.item)
        e.dataTransfer.setData("text", cardItem)
    }

    handleClickOutside(event){
        if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
            this.setState({show:false})
        }
    }

    setWrapperRef(node){
        this.wrapperRef = node;
    }

    render() {
        return (
            <>
                <img src={this.props.item["imageUrl"]} alt={this.props.item["name"]} id={this.props.item["name"]} onClick={this.showModal} draggable="true" onDragStart={e=>this.dragId(e)}></img>
                {this.state.show && <img src={this.props.item["imageUrl"]} ref={this.setWrapperRef}></img>}
            </>
        )
    }
}
