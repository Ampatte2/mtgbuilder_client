import React, { Component } from 'react'
import Styled from "../style/styled"
import {connect} from "react-redux";
import {addCard} from "../store/actions"
import {DropDown} from "./index"

class Decklist extends Component {
    constructor(props){
        super(props)
        this.handleDrop= this.handleDrop.bind(this);
        this.handleDragEnter= this.handleDragEnter.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        
    }
    handleDrop = e =>{
        const cardItem = JSON.parse(e.dataTransfer.getData("text"))
        this.props.addCard(cardItem)
        e.preventDefault()
        e.stopPropagation()
    }
    handleDragEnter = e =>{
        e.preventDefault()
        e.stopPropagation()
    }
    handleDragLeave = e =>{
        console.log("drag leave");
        e.preventDefault()
        e.stopPropagation()
    }
    
    render() {
        return (
            <>
            <DropDown></DropDown>
            <Styled.Decklist 
            onDragLeave={e=>this.handleDragLeave(e)}
            onDropCapture={e=> this.handleDrop(e)} 
            onDragOver={e=>this.handleDragEnter(e)}>
            <p>{this.props.currentDeck["name"]}</p>
            <div>{this.props.currentDeck.decklist.map((item, index)=>{
                return <div key={index}>{item.name}</div>
            })}</div>        
            </Styled.Decklist>
            </>
        )
    }
}
const mapStateToProps = (state) =>{
    const {currentDeck} = state;
    return {currentDeck}
}

export default connect(mapStateToProps, {addCard})(Decklist)
