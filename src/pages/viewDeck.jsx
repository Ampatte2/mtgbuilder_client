import React, { Component } from 'react'
import {CardDisplay} from "../components";
import {connect} from "react-redux";
import {ModalDeck} from "../components/index";
import {saveDeck} from "../store/actions/index"

class viewDeck extends Component {
    
    handleClick(name, deck){
        console.log(name, deck)
        //this.props.saveDeck(name, deck)
    }
    render() {

        const id = this.props.match.params.id
        const view = this.props.match.params.view
        console.log(this.props[view][id])
        
        return (
            <div>
                <CardDisplay cardList={this.props[view][id].decklist}></CardDisplay>

                <ModalDeck deck={this.props[view][id]} clone={this.handleClick}></ModalDeck>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    const {myDecks} = state;
    const {decklists} = state;
    return {myDecks, decklists}
}

export default connect(mapStateToProps, {saveDeck})(viewDeck)
