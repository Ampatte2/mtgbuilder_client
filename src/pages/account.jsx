import React, { Component } from 'react'
import {connect} from "react-redux";
import {authenticate} from "../store/actions"

class account extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.props.authenticate({payload: "hello"})
        console.log("handleSubmit")
    }

    render() {
        return (
            <div>

                <h1>Decks and Cards</h1>

                <h2>Cards</h2>

                <h2>Decks</h2>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    const {cardList} = state
    return {cardList}
}

export default connect(mapStateToProps,{authenticate})(account)
