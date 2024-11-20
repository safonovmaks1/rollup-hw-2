import JavaScriptLogo from './assets/JavaScript_logo.png';
import './index.css';

const title = document.createElement('h1');
title.textContent = 'I love JavaScript';

const img = document.createElement('img');
img.src = JavaScriptLogo;

document.querySelector('body').append(title, img);
