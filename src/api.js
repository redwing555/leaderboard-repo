const api_base_url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const game_id = 'Zl4d7IVkemOTTV';

const createGameData = async  (gameName) => {

    const response  = await fetch(api_base_url, {

        method: 'POST',
        body: JSON.stringify({name : `${gameName}`}),
        headers: {
            'Content-type': 'application/json'
        },     

    });

    

    let gameData = await response.json();
    
    return gameData;
    
}



const fetchUserData = async () => {
    let response = await fetch(`${api_base_url}${game_id}/scores/`);
    let userData = await response.json();
    return userData;
}



const createUserData = async  (userName,userScore) => {

    const resp  = await fetch(`${api_base_url}${game_id}/scores/`, {

        method: 'POST',
        body: JSON.stringify({user :userName, score :userScore}),
        headers: {
            'Content-type': 'application/json'
        },
    });

    let userData = await resp.json();
    return userData;
}

export {createUserData, fetchUserData, createGameData};