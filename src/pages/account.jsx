import React, { Component } from 'react'
import {connect} from "react-redux";
import {} from "../store/actions"
import {Decklist, CardDisplay} from "../components"

class account extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log("handleSubmit")
    }

    render() {
        return (
            <div>

                <h1>Decks and Cards</h1>
                
                <h2>Cards</h2>
                <CardDisplay cardList={this.props.myCards} view={"No Saved Cards"}></CardDisplay>
                <h2>Decks</h2>
                {this.props.myDecks.length>0 && this.props.myDecks.map((item, index)=>{
                    return <h3 key="index">{item}</h3>
                })}
                {this.props.myDecks.length==0 && <h3>No Saved Decks</h3>}
                <Decklist></Decklist>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
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
