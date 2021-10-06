/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */
import './style.css';

import { createGameData, createUserData, fetchUserData } from './api.js';



const list = document.querySelector('.score-list');
const addScore = document.getElementById('submit-score');
const refresh = document.getElementById('refresh');

const sortUserDataByScore = (arr) => {
  arr.sort((data1, data2) => data2.score - data1.score);
}

const loadToDom = async () => {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }

  const userData = await fetchUserData();
  sortUserDataByScore(userData.result);


  userData.result.forEach((data) => {
    const scoreInfo = document.createElement('li');
    scoreInfo.innerHTML = `<div class="user">${data.user} : </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="user_score">${data.score}</div>`;
    list.appendChild(scoreInfo);
  });
  
};

addScore.addEventListener('click', async () => {
  const userName = document.getElementById('name').value;
  const userScore = document.getElementById('score').value;

  if (userName !== '' && userScore !== '') {
    await createUserData(userName, userScore);
  }

  loadToDom();
});

refresh.addEventListener('click', loadToDom);

document.addEventListener('DOMContentLoaded', () => {
  createGameData('The Game');
  loadToDom();
});
