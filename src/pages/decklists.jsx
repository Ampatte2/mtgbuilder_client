import React, { Component } from 'react'
import {connect} from "react-redux";
import {saveDeck} from "../store/actions";
import { Link } from 'react-router-dom';



class Decklists extends Component {
    

    render() {
        let dis = this.props.decklists

        return (
            <div>
                {dis.length>0 && dis.map((item, index)=>{                    
                    return <>
                    <h3 key={index}>{item.name}</h3>
                    <Link to={"/viewDeck/" + index + "/decklists"}><img src={item.decklist[0].imageUrl}></img></Link>
                    
                    </>
                })}
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    const {auth} = state;
    const {decklists} = state;
    return {auth, decklists}
}

export default connect(mapStateToProps, {saveDeck})(Decklists);
