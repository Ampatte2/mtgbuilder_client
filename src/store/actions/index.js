import {fetchCard, getLogin, getDeckList, saveToList, addToList, getRegister, getUser, saveCard} from "../../api"
import Erasure from "../../images/Erasure.jpg"

export const GET_CARD = "GET_CARD"
export const DISPLAY_CARD = "DISPLAY_CARD"
export const IS_LOADED = "IS_LOADED"
export const LOGIN = "LOGIN"
export const GET_DECK = "GET_DECK"
export const ADD_CARD = "ADD_CARD"
export const MODIFY_DECK = "MODIFY_DECK"
export const MY_CARD = "MY_CARD"
export const REGISTER = "REGISTER"
export const ERROR = "ERROR"
export const AUTH = "AUTH"
export const ADD_DECK = "ADD_DECK"
export const DB_DECK = "DB_DECK"


export function addCard(card){
    return {type: ADD_CARD, card}
}

export function modifyDeck(modifier, index){
    return {type: MODIFY_DECK, modifier, index}
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
export function isAuth(value){
    return {type:AUTH, value}
}

export function myCard(card){
    return {type:MY_CARD, card}
}

export function addDeck(deck){
    return {type:ADD_DECK, deck}
}
export function dbDecks(decks){
    return {type:DB_DECK, decks}
}

export function saveMyCard(card){
    const payload = {card: card, token:localStorage.getItem("token")}
    return function(dispatch){
        dispatch(isLoaded(false));
        return saveCard(payload).then(res=>{
            dispatch(isLoaded(true))
        })
    }
}

export function login(value){
    return function(dispatch){
        dispatch(isLoaded(false))
        return getLogin(value).then(res=>{
            if(res.data.token){
                localStorage.setItem("token",res.data.token)
                
                dispatch(user(res.data.token))
            }
            dispatch(isLoaded(true))
        })
        
    }
}
export function user(token){
    return function(dispatch){
        dispatch(isLoaded(false))
        return getUser(token).then(res=>{
            
            let decks=[];
            let allDecks=[];

            res.data[0].map(item=>{
                decks.push(JSON.parse(item.decklist))
            })

            res.data[1].map(item=>{
                dispatch(myCard(JSON.parse(item.card)))
            })

            res.data[2].map(item=>{
                allDecks.push(JSON.parse(item.decklist))
            })

            dispatch(dbDecks(allDecks))
            dispatch(addDeck(decks))
            dispatch(isAuth(true))
            dispatch(isLoaded(true))

        })
    }
}

export function register(value){
    return function(dispatch){
        
        dispatch(isLoaded(false))

        return getRegister(value).then(res=>{

            const token = res.data.token
            if(res.data.error){
                
            }else{
                localStorage.setItem("token",res.data.token)
                dispatch(user(token))
            }
            
            dispatch(isLoaded(true))
        }) 
        
    }
}

export function add(card){
    return function(dispatch){
        
        return //api call here
    }
}

export function saveDeck(deckName, deck){

    const payload = {newDeck: {name:deckName, decklist: deck.decklist}, token:localStorage.getItem("token")}
    
    return function(dispatch){
        dispatch(isLoaded(false))
        
        return saveToList(payload).then((res)=>{
            
            if(res.data.error){
                alert("Duplicate Deckname")
            }else{
                dispatch(addDeck([payload.newDeck]))
                alert("Decklist Saved")
            }
            
            dispatch(isLoaded(true))

        })
        
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


