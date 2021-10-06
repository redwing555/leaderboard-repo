/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */
import './style.css';

// import {
//   loadDom, AddScore, scores,
// } from './crud';

import { createGameData, createUserData, fetchUserData} from './api';

const list = document.querySelector('.score-list');
const addScore = document.getElementById('submit-score');
const refresh = document.getElementById('refresh');

const loadToDom = async () =>{

  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }

  let userData = await fetchUserData();
  
  userData.result.forEach((data) => { 
  const scoreInfo = document.createElement('li');
  scoreInfo.innerHTML = `<div class="user">${data.user} : </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="user_score">${data.score}</div>`;
  list.appendChild(scoreInfo);
  });
}



addScore.addEventListener('click', async () => {

  let user_name = document.getElementById('name').value;
  let user_score = document.getElementById('score').value;

  if(user_name !== '' && user_score !== '') {

    await createUserData(user_name,user_score);

  }

  loadToDom();
});


refresh.addEventListener('click',loadToDom);



document.addEventListener('DOMContentLoaded', () => {
  createGameData("The Game"); 
  loadToDom();
});
