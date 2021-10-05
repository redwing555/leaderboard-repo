export const list = document.querySelector('.score-list');
export const scores = JSON.parse(localStorage.getItem('scoreList')) || [];

export function createScore(name, score) {
  const scoreInfo = document.createElement('li');

  scoreInfo.innerHTML = `<div class="name">${name} : </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="score">${score}</div>`;
  list.appendChild(scoreInfo);
}

export function loadDom() {
  scores.forEach((score) => {
    createScore(score.name, score.score);
  });
}

export function AddScore(scoreArr) {
  const score = {
    name: document.getElementById('name').value,
    score: document.getElementById('score').value,
  };
  scoreArr.push(score);
  localStorage.setItem('scoreList', JSON.stringify(scoreArr));
}