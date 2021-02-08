/**
 * File: intro.js
 * Description: Star Wars Intro Logic.
 */

let width = window.innerWidth;
let height = window.innerHeight;

let intro = document.getElementsByClassName('intro')[0];
let history = document.getElementsByClassName('history')[0];
let paraggraphs = document.getElementsByClassName('paraggraphs')[0];
let music = document.getElementById('music');

intro.style.fontSize = width / 30 + 'px';
history.style.fontSize = width / 20 + 'px';
paraggraphs.style.height = height + 'px';

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  intro.style.fontSize = width / 30 + 'px';
  history.style.fontSize = width / 20 + 'px';
  paraggraphs.style.height = height + 'px';
});

function start() {
  intro.className = 'intro intro_text intro_animation';
  history.className = 'history history_text history_animation';
  sound.play();
}

/* Stary sci-fi backgorund */

let canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const num = 100;
const size = 2;
const elements = [];

function start() {
  for (let i = 0; i < num; i++) {
    elements[i] = {
      x: Math.ceil(Math.random() * width),
      y: Math.ceil(Math.random() * height),
      size: Math.random() * size,
    };
  }
}

function snow() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < num; i++) {
    const e = elements[i];
    ctx.beginPath();
    ctx.fillStyle = '#FFFFFF';
    ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

start();
snow();