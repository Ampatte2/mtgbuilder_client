import React, { Component } from 'react'
import {CardDisplay} from "../components";
import {connect} from "react-redux";
import {ModalDeck} from "../components/index";
import {saveDeck} from "../store/actions/index";
import { Redirect } from 'react-router-dom';


class viewDeck extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(name, deck){
        this.props.saveDeck(name, deck)
    }

    render() {

        const id = this.props.match.params.id
        const view = this.props.match.params.view
        
        return (
            <div>
                {this.props[view][id] ? 
                <>
                <ModalDeck deck={this.props[view][id]} clone={this.handleClick}></ModalDeck>
                <CardDisplay cardList={this.props[view][id].decklist}></CardDisplay>
                </>
                : <Redirect to="/"/>}
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    const {myDecks} = state;
    const {decklists} = state;
    const {auth} = state;
    return {myDecks, decklists, auth}
}

export default connect(mapStateToProps, {saveDeck})(viewDeck)
