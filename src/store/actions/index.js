import {fetchCard, getLogin, getDeckList, saveToList, addToList, getRegister} from "../../api"
import Erasure from "../../images/Erasure.jpg"

export const GET_CARD = "GET_CARD"
export const DISPLAY_CARD = "DISPLAY_CARD"
export const IS_LOADED = "IS_LOADED"
export const LOGIN = "LOGIN"
export const GET_DECK = "GET_DECK"
export const ADD_CARD = "ADD_CARD"
export const SAVE_DECK = "SAVE_DECK"
export const INC_CARD = "INC_CARD"
export const MY_CARD = "MY_CARD"
export const REGISTER = "REGISTER"
export const ERROR = "ERROR"

export function addCard(card){
    return {type: ADD_CARD, card}
}

export function incCard(value){
    return {type: INC_CARD, value}
}

export function myCard(card){
    return {type: MY_CARD, card}
}

export function displayCard(cardList){
    return {type: DISPLAY_CARD, cardList}
}

export function isLoaded(value){
    return {type:IS_LOADED, value}
}

export function isError(value){
    return {type:ERROR, value}
}

export function login(user){
    return function(dispatch){
        console.log(user)
        dispatch(isLoaded(false))
        return getLogin(user).then(res=>{
            console.log(res)
            dispatch(isLoaded(true))
        })
        
    }
}

export function register(user){
    return function(dispatch){
        console.log(user);
        dispatch(isLoaded(false))
        return getRegister(user).then(res=>{
            console.log(res)
            dispatch(isLoaded(true))
        }) 
        
    }
}

export function add(card){
    return function(dispatch){
        
        return //api call here
    }
}

export function saveDeck(deck){
    return function(dispatch){
        dispatch(isLoaded(false))
        return saveToList
        dispatch(isLoaded(true))
    }
    
}

export function getDeck (query){
    return function(dispatch){
        dispatch(isLoaded(false))
        return //api call here
        dispatch(isLoaded(true))
    }
}

export function getCard (query){

    return function(dispatch){

        dispatch(isLoaded(false))

        return fetchCard(query).then((res)=>{
            console.log(res.data.cards)
            //filter the data by assigning it's name to a key in an object and the response object as value of the key
            let filtered={};
            
            if(res.data.cards.length===0){
                filtered = [{name:"No Cards Found", imageUrl:Erasure}];
            }else{
                res.data.cards.forEach((card)=>{
                    //Look in the filtered object for the card name key, if undefined save as the card with matching key
                    if(filtered[card.name]===undefined){
                        filtered[card.name] = card;
                    //if card has no image and the current card from the response has an image save the current card.
                    }else if(filtered[card.name]["imageUrl"]===undefined && card.imageUrl){
                        filtered[card.name] = card;
                    }
                });
            }
            


            dispatch(displayCard(filtered))

            dispatch(isLoaded(true))

        })
    }
}


