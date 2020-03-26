

import {getCard} from "../store/actions";
import {connect} from "react-redux";
import React, { Component } from 'react'
import Loader from "react-loader";

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

    render() {
        let dis = this.props.cardList

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

            {Object.keys(dis).length> 0 ? Object.values(dis).map((item, index)=>{
                        let typeDescription;
                        if(item.imageUrl){
                            if(item["types"][0]==="Creature"){
                                typeDescription = <><h3>Power {item["power"]}</h3><h3>Toughness {item["toughness"]}</h3></>
                            }
                            return <>
                                    <h1 key={index}>{item["name"]}</h1>
                                    <img src={item.imageUrl} alt={item["name"]}/>
                                    <h3>{item["manaCost"]}</h3>
                                    <h3>{item["type"]}</h3>
                                    <h3>{item["text"]}</h3>
                                    {typeDescription}
                                    </>
                        }else{
                            if(item["types"][0]==="Creature"){
                                typeDescription = <><h3>Power {item["power"]}</h3><h3>Toughness {item["toughness"]}</h3></>
                            }
                            return <>
                            <h1 key={index}>{item["name"]}</h1>
                            <h3>{item["manaCost"]}</h3>
                            <h3>{item["type"]}</h3>
                            <h3>{item["text"]}</h3>
                            {typeDescription}
                            
                            </>
                        }
                    }
        
            ): <h1>Search For a Card</h1>}
        </>
        )
    }
}

const mapStateToProps = (state) =>{
    const {isLoaded} = state;
    const {error} = state;
    const {cardList} = state;
    return {isLoaded, error, cardList}

}

export default connect(mapStateToProps, {getCard})(home)


