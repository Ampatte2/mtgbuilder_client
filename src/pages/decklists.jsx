import React, { Component } from 'react'
import {connect} from "react-redux";
import {} from "../store/actions";


class Decklists extends Component {
    render() {
        return (
            <div>
                
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

export default connect(mapStateToProps, {})(Decklists);
