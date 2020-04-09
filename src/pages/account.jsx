import React, { Component } from 'react'
import {connect} from "react-redux";
import {deleteMyCard} from "../store/actions"
import {Decklist, CardDisplay, DeckDisplay} from "../components"
import { Redirect } from 'react-router-dom';

class account extends Component {
    
    
    render() {
        
        return (
            <div>
                {!this.props.auth && <Redirect to="/"/>}
                <h1>Decks and Cards</h1>
                
                <h2>Cards</h2>
                <CardDisplay cardList={this.props.myCards} view={"No Saved Cards"} deleteCard={this.props.deleteMyCard}></CardDisplay>
                <h2>Decks</h2>
                <DeckDisplay decks={this.props.myDecks} view={"myDecks"}></DeckDisplay>
                {this.props.myDecks.length===0 && <h3>No Saved Decks</h3>}
                
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    const {cardList} = state;
    const {currentDeck} = state;
    const {myCards} = state;
    const {myDecks} = state;
    const {auth} = state;
    return {cardList, currentDeck, myCards, myDecks, auth}
}

export default connect(mapStateToProps,{deleteMyCard})(account)
