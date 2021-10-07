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
};

const loadToDom = async () => {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }

  const userData = await fetchUserData();
  sortUserDataByScore(userData.result);

  userData.result.forEach((data, index) => {
    const scoreInfo = document.createElement('li');
    scoreInfo.innerHTML = `
    <span class="fa-layers fa-fw">
    <i class="fas fa-certificate fa-lg"></i>
    <span class="ranking fa-layers-text fa-inverse" data-fa-transform="shrink-11.5">${index + 1}</span>
    </span>
    <div class="user">${data.user.toUpperCase()}  </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="user_score">${data.score}</div>
    `;
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
