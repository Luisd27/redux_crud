import { Provider } from "react-redux";

export const SET_GAMES = 'SET_GAMES';

export function setGames(games){
    return {
        type: SET_GAMES,
        games
    }
}

function handleResponse(response){
    if(response.ok){
        return response.json();
    }else{
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function saveGames(data) {
    return dispatch => {
        return fetch('api/games',{
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }).then(handleResponse)
    }
}

export function fetchGames(){
    return dispatch => {
        fetch('/api/games')
        .then(res => res.json())
        .then(data => dispatch(setGames(data.games)));
    }
}