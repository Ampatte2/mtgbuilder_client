import React, { Component } from 'react'
import Styled from "../style/styled"

export default class Decklist extends Component {
    constructor(props){
        super(props)
        this.handleDrop= this.handleDrop.bind(this);
        this.handleDragEnter= this.handleDragEnter.bind(this);
    }
    handleDrop = e =>{
        
        e.preventDefault()
        e.stopPropagation()
        console.log(e.dataTransfer, "dropped")
    }
    handleDragEnter = e =>{
        
        e.preventDefault()
        e.stopPropagation()
    }
    render() {
        return (
            <Styled.Decklist onDropCapture={e=> this.handleDrop(e)} onDragOver={e=>this.handleDragEnter(e)}>              
            </Styled.Decklist>
        )
    }
}
