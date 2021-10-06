/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */
import './style.css';

// import {
//   loadDom, AddScore, scores,
// } from './crud';

import { createGameData, fetchUserData} from './api';
const list = document.querySelector('.score-list');

// const addScore = document.getElementById('submit-score');
// const refresh = document.getElementById('refresh');

let loadToDom = async () =>{

  
  const scoreInfo = document.createElement('li');

  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }

  let userData = await fetchUserData();
  userData.result.forEach((data) => { 
  scoreInfo.innerHTML = `<div class="name">${data.name} : </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="score">${data.score}</div>`;
  list.appendChild(scoreInfo);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createGameData('My new Game');
  console.log(createGameData('My new Game'));
  loadToDom();
});

// addScore.addEventListener('click', () => {
//   AddScore(scores);
//   loadDom();
//   window.location.reload();
// });

// refresh.addEventListener('click', () => {
//   localStorage.setItem('scoreList', JSON.stringify([]));
//   window.location.reload();
// });
