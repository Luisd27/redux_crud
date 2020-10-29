import { act } from "react-dom/test-utils";
import { SET_GAMES, ADD_GAME, GAME_FETCHED } from "../actions";

export default function games(state = [], action = {}) {
    switch(action.type){
        case SET_GAMES:
            return action.games;
        case ADD_GAME:
            return [
                ...state,
                action.game
            ];
        case GAME_FETCHED:
            const index = state.findIndex(item => item._id === action.game.id);
            if(index > -1) {
                return state.map(item => {
                    if(item._id === action.game._id)
                    return action.game;
                });
            }else{
                return [
                    ...state,
                    action.game
                ];
            }
        default: return state;
    }
}