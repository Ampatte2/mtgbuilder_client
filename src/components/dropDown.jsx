import React, { Component } from 'react'
import {connect} from "react-redux";
import {saveDeck, getDeck} from "../store/actions"
import Styled from "../style/styled"

class DropDown extends Component {
    constructor(props){
        super(props)
        this.state={
            display:"none",
            deckName:"",
            selectError:false
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
        this.props.getDeck({name: item.name})
        //handle click changes the deck
        this.setState({deckName: item.name})

    }

    //Handles the saving of decks, displays messages based on no name or not authorized
    handleSubmit(e){
        e.preventDefault();
        if(this.state.deckName===""){
            this.setState({selectError: "All Decks Must Have a Name"})
        }else if(this.props.auth===false){
            this.setState({selectError:"Login To Save Deck"})
        }else if(this.props.currentDeck.decklist.length===0){
            this.setState({selectError:"Decklist Cannot Be Empty"})
        }else{
            this.setState({selectError:false})
            this.props.saveDeck(this.state.deckName, this.props.currentDeck)
        }
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
                <Styled.DropInput type="text" value={this.state.deckName} onChange={e=>this.handleChange(e)} placeholder={this.props.currentDeck.name} onClick={()=>this.showDiv()}></Styled.DropInput>
                <button type="button" onClick={event=>this.handleSubmit(event)}>Save</button>
                </Styled.DeckSelect>

                {this.state.selectError && <Styled.SelectError>{this.state.selectError}</Styled.SelectError>}

                <Styled.DeckSelectDrop style={{display:this.state.display}} ref={this.setWrapperRef}>
                {this.props.myDecks.map((item, index)=>{
                    return <p onClick={()=>this.handleClick(item)} key={index}>{item.name}</p>
                })}
                </Styled.DeckSelectDrop>

            </>
        )
    }
}
const mapStateToProps = (state) =>{
    const {myDecks} = state;
    const {currentDeck} = state;
    const {auth} = state;
    return {myDecks, currentDeck, auth}
}
const mapDispatchToProps = (dispatch)=>{
    return{
        saveDeck: (deckName, deck)=>{dispatch(saveDeck(deckName, deck))},
        getDeck: (deckName)=>{dispatch(getDeck(deckName))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown)