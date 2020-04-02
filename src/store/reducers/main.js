
import {GET_CARD, DISPLAY_CARD, IS_LOADED, GET_DECK, ADD_CARD, SAVE_DECK, MY_CARD, AUTH, MODIFY_DECK} from "../actions"

const initialState = {isLoaded:true,error:false, auth:false, cardList:[], currentDeck:{name:"Please Select A Deck", decklist:[]}, myDecks:[], myCards:[], decklists:[]}

const mtgbuilder = (state=initialState, action)=>{
    switch(action.type){
        case GET_CARD:
            return state;
        case DISPLAY_CARD:
            return Object.assign({}, state, {cardList: action.cardList})
        case IS_LOADED:
            return Object.assign({}, state, {isLoaded: action.value})
        case GET_DECK:
            return Object.assign({}, state, {currentDeck: action.deck})
        case ADD_CARD:
            return Object.assign({}, state, {currentDeck: {name: state.currentDeck.name, decklist: [...state.currentDeck.decklist, action.card]}})
        case MODIFY_DECK:
            return Object.assign({}, state, {
                currentDeck: {name:state.currentDeck.name, decklist:state.currentDeck.decklist.filter((card, index)=>{
                    if(index===action.index){
                        card.quantity+= action.modifier;
                        if(card.quantity>0){
                            return card
                        }
                    }else{
                        return card
                    }
                })}
            })
        case MY_CARD:
            return Object.assign({}, state, {myCards: [...state.myCards, action.card]})
        case AUTH:
            return Object.assign({}, state, {auth: action.value})
        default:
            return state
    }

}
export default mtgbuilder;