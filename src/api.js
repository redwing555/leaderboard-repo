const api_base_url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const game_id = 'Zl4d7IVkemOTTVg2fUdz';

export let createGameData = async  (gameName) => {

    const response  = await fetch(api_base_url, {

        method: 'POST',
        body: JSON.stringify({name : gameName}),
        headers: {
            'Content-type': 'application/json'
        },
        

    });

    

    let gameData = await response.json();
    return gameData;
    
}



export let fetchUserData = async () => {
    let response = await fetch(`${api_base_url}${game_id}/scores/`);
    let userData = await response.json();
    return userData;
}



export let createUserData = async  (data) => {

    let response  = await fetch(api_base_url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        },
    })

    let userData = await response.json();
    return userData;
}