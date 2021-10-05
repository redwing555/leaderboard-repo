export const list = document.querySelector('.score-list');
export const scores = JSON.parse(localStorage.getItem('scoreList')) || [];

export const createScore = (name, score) => {
  const scoreInfo = document.createElement('li');

  scoreInfo.innerHTML = `<div class="name">${name} : </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="score">${score}</div>`;
  list.appendChild(scoreInfo);
};

export const loadDom = () => {
  scores.forEach((score) => {
    createScore(score.name, score.score);
  });
};

export const AddScore = (scoreArr) => {
  const score = {
    name: document.getElementById('name').value,
    score: document.getElementById('score').value,
  };
  scoreArr.push(score);
  localStorage.setItem('scoreList', JSON.stringify(scoreArr));
};