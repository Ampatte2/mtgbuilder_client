import React, { Component } from 'react'
import {connect} from "react-redux";
import {saveDeck, getDeck} from "../store/actions"
import Styled from "../style/styled"

class DropDown extends Component {
    constructor(props){
        super(props)
        this.state={
            display:"none",
            deckName:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    
    componentWillUnmount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    setWrapperRef(node){
        this.wrapperRef = node;
    }

    showDiv(){
        if(this.state.display==="none"){
            this.setState({display:"block"})
        }else{
            this.setState({display:"none"})
        }
        
    }

    handleChange(e){
        this.setState({deckName: e.target.value})
    }

    handleClick(item){
        //handle click changes the deck
        this.setState({deckName: item})
    }

    handleSubmit(item){
        console.log(item)
    }

    handleClickOutside(event){
        if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
            this.setState({display:"none"})
        }
    }

    render() {
        return (
            <>
            <Styled.DeckSelect>
            <input type="text" value={this.state.deckName} onChange={e=>this.handleChange(e)} placeholder={this.props.currentDeck.name} onClick={()=>this.showDiv()}></input><button type="submit" onSubmit={()=>this.handleSubmit(this.state.deckName)}>Save</button>
            </Styled.DeckSelect>
            <Styled.DeckSelectDrop style={{display:this.state.display}} ref={this.setWrapperRef}>
                {this.props.allDecks.map((item, index)=>{
                    return <p onClick={()=>this.handleClick(item)} key={index}>{item}</p>
                })}
            </Styled.DeckSelectDrop>
            </>
        )
    }
}
const mapStateToProps = (state) =>{
    const {allDecks} = state;
    const {currentDeck} = state;
    return {allDecks, currentDeck}
}
const mapDispatchToProps = (dispatch)=>{
    return{
        saveDeck: ()=>{dispatch(saveDeck())},
        getDeck: ()=>{dispatch(getDeck())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown)