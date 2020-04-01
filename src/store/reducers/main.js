
import {GET_CARD, DISPLAY_CARD, IS_LOADED, GET_DECK, ADD_CARD, SAVE_DECK, INC_CARD, MY_CARD} from "../actions"

const initialState = {isLoaded:true,error:false, cardList:[], currentDeck:{name:"Please Select A Deck", decklist:[]}, allDecks:["Deck one", "Deck two", "Deck three", "Deck Four", "Deck Five", "Deck 6", "Deck 7", "Deck 8"], myCards:[]}

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
        case SAVE_DECK:
            return Object.assign({}, state, {});
        case ADD_CARD:
            return Object.assign({}, state, {currentDeck: {name: state.currentDeck.name, decklist: [...state.currentDeck.decklist, action.card]}})
        case INC_CARD:
            return Object.assign({}, state, {})
        case MY_CARD:
            return Object.assign({}, state, {myCards: [...state.myCards, action.card]})
        default:
            return state
    }

}
export default mtgbuilder;