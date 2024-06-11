import createVillainCard from '../modules/villainModule';
import joker from '../images/joker.jpg';

const Villains = () => {
  const villainsContainer = document.createElement('section');

  const villainsHeadline = document.createElement('h2');
  villainsHeadline.classList.add('villains_headline');
  villainsHeadline.textContent = 'Villains';

  const jokerCard = createVillainCard(joker, 'Joker', 'The Joker is a master criminal with a clown-like appearance, and is considered one of the most infamous criminals within Gotham City. Initially portrayed as a violent sociopath who murders people for his own amusement, the Joker later in the 1940s began to be written as a goofy trickster-thief.');
  villainsContainer.classList.add('villains_section');
  villainsContainer.appendChild(jokerCard);
  return { villainsHeadline, villainsContainer };
};

export default Villains;
