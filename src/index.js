import './style.css';
import Hero from './sections/hero';
import Villains from './sections/villains';

const hero = document.querySelector('.hero');
const villains = document.querySelector('.villains');
hero.appendChild(Hero());
villains.appendChild(Villains().villainsHeadline);
villains.appendChild(Villains().villainsContainer);
