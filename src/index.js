/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */
import './style.css';

import {
  loadDom, AddScore, scores,
} from './crud';

const addScore = document.getElementById('submit-score');
const refresh = document.getElementById('refresh');

document.addEventListener('DOMContentLoaded', () => {
  JSON.parse(localStorage.getItem('scoreList'));
  loadDom();
});

addScore.addEventListener('click', () => {
  AddScore(scores);
  loadDom();
  window.location.reload();
});

refresh.addEventListener('click', () => {
  localStorage.setItem('scoreList', JSON.stringify([]));
  window.location.reload();
});
