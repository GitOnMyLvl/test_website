import './style.css';
import Hero from './sections/hero';
import Villains from './sections/villains';
import Footer from './sections/footer';

const hero = document.querySelector('.hero');
const villains = document.querySelector('.villains');
const footer = document.querySelector('.footer');
hero.appendChild(Hero());
villains.appendChild(Villains().villainsHeadline);
villains.appendChild(Villains().villainsContainer);
footer.appendChild(Footer());
