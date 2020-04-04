import React, { Component } from 'react'
import {connect} from "react-redux";
import {} from "../store/actions"
import {Decklist, CardDisplay, DeckDisplay} from "../components"

class account extends Component {
    

    render() {
        return (
            <div>

                <h1>Decks and Cards</h1>
                
                <h2>Cards</h2>
                <CardDisplay cardList={this.props.myCards} view={"No Saved Cards"}></CardDisplay>
                <h2>Decks</h2>
                <DeckDisplay decks={this.props.myDecks} view={"myDecks"}></DeckDisplay>
                {this.props.myDecks.length===0 && <h3>No Saved Decks</h3>}
                <Decklist></Decklist>
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    const {cardList} = state;
    const {currentDeck} = state;
    const {myCards} = state;
    const {myDecks} = state;
    return {cardList, currentDeck, myCards, myDecks}
}

export default connect(mapStateToProps,{})(account)
