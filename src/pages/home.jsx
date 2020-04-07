

import {getCard, saveMyCard} from "../store/actions";
import {connect} from "react-redux";
import React, { Component } from 'react'
import Loader from "react-loader";
import {Decklist, CardDisplay} from "../components";



class home extends Component {
    constructor(props){
        super(props);
        this.state = {name:"", cmc:"", set:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let newState = {};
        newState[event.target.name]=event.target.value;
        this.setState(newState);
    }

    handleSubmit= (e) =>{
        e.preventDefault();
        
        this.props.getCard(this.state)
    }

    addMyCard = (card, e) =>{
        //hides button of AddCard To Library if clicked.
        e.target.style.visibility = "hidden"

        const filteredItem = {
            imageUrl: card.imageUrl,
            name: card.name,
            cmc: card.cmc,
            types: card.types,
            type:card.type,
            text:card.text,
            loyalty:card.loyalty,
            toughness:card.toughness,
            power:card.power,
            quantity:1
        }
        this.props.saveMyCard(filteredItem)
    }
    
    
    render() {
        
        return (
        <>
            <form name="search-form"  onSubmit={e=>this.handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" onChange={e=>this.handleChange(e)}></input>
                <label htmlFor="cmc" >CMC</label>
                <input name="cmc" type="text" onChange={e=>this.handleChange(e)}></input>
                <label htmlFor="set">Set</label>
                <input name="set" type="text" onChange={e=>this.handleChange(e)}></input>
                <button value="submit" type="submit">Get the card</button>
            </form>

            <Loader loaded={this.props.isLoaded}/>
            {/* Look at props cardlist being passed down, if empty show alternate text 
                if not empty print only cards that have an image and are the original printing of the card
            */}
            <CardDisplay cardList={this.props.cardList} addMyCard={this.addMyCard} view={"Search For a Card"} isAuth={this.props.auth}></CardDisplay>

            <Decklist></Decklist>
        </>
        )
    }
}

const mapStateToProps = (state) =>{
    const {isLoaded} = state;
    const {cardList} = state;
    const {auth} = state;
    return {isLoaded, cardList, auth}

}
const mapDispatchToProps = (dispatch)=>{
    return{
        getCard: (item)=>{dispatch(getCard(item))},
        saveMyCard: (item)=>{dispatch(saveMyCard(item))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)


