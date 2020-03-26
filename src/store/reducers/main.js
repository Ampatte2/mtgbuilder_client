
import {GET_CARD, DISPLAY_CARD, IS_LOADED} from "../actions"

const initialState = {isLoaded:true,error:false, cardList:[]}

const mtgbuilder = (state=initialState, action)=>{
    switch(action.type){
        case GET_CARD:
            return state;
        case DISPLAY_CARD:
            return Object.assign({}, state, {cardList: action.cardList})
        case IS_LOADED:
            return Object.assign({}, state, {isLoaded: action.value})
        default:
            return state
    }

}
export default mtgbuilder;