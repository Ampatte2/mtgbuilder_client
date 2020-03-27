import {fetchCard, login} from "../../api"
import Erasure from "../../images/Erasure.jpg"

export const GET_CARD = "GET_CARD"
export const DISPLAY_CARD = "DISPLAY_CARD"
export const IS_LOADED = "IS_LOADED"
export const LOGIN = "LOGIN"

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
export function displayCard(cardList){
    return {type: DISPLAY_CARD, cardList}
}
export function isLoaded(value){
    return {type:IS_LOADED, value}
}

export function authenticate(value){
    return function(dispatch){
        return login(value)
    }
}