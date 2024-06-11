import createVillainCard from '../modules/villainModule';
import joker from '../images/joker.jpg';
import bane from '../images/bane.jpg';
import freeze from '../images/freeze.jpg';
import ivy from '../images/poisonIvy.jpg';
import riddler from '../images/riddler.jpg';
import scarecrow from '../images/scarecrow.jpg';
import penguin from '../images/penguin.jpg';
import harley from '../images/harley.jpg';

const Villains = () => {
  const villainsContainer = document.createElement('section');
  villainsContainer.classList.add('villains_section');
  const villainsHeadline = document.createElement('h2');
  villainsHeadline.classList.add('villains_headline');
  villainsHeadline.textContent = 'Villains';

  const jokerCard = createVillainCard(joker, 'Joker', 'The Joker is a master criminal with a clown-like appearance, and is considered one of the most infamous criminals within Gotham City. Initially portrayed as a violent sociopath who murders people for his own amusement, the Joker later in the 1940s began to be written as a goofy trickster-thief.');
  const baneCard = createVillainCard(bane, 'Bane', 'Bane is a fictional supervillain appearing in American comic books published by DC Comics. Created by Chuck Dixon, Doug Moench, and Graham Nolan, he made his debut in Batman: Vengeance of Bane #1 (January 1993). Bane is usually depicted as an adversary of the superhero Batman and belongs to the collective of enemies that make up the Batman rogues gallery.');
  const freezeCard = createVillainCard(freeze, 'Mr. Freeze', 'Mr. Freeze is a fictional supervillain appearing in American comic books published by DC Comics. Created by writer Dave Wood and artist Sheldon Moldoff, the character first appeared in Batman #121 (February 1959), where he was known by the name Mr. Zero.');
  const ivyCard = createVillainCard(ivy, 'Poison Ivy', 'Poison Ivy is a fictional supervillain appearing in comic books published by DC Comics, commonly in Batman stories. Poison Ivy was created by Robert Kanigher and Sheldon Moldoff, and made her debut in Batman #181 (June 1966).');
  const riddlerCard = createVillainCard(riddler, 'Riddler', 'The Riddler is a supervillain appearing in comic books published by DC Comics, created by writer Bill Finger and artist Dick Sprang. He first appeared in "Detective Comics" #140 in October 1948. Known for his obsession with riddles, puzzles, and word games, he often leaves complex clues for Batman and the authorities to solve.');
  const scarecrowCard = createVillainCard(scarecrow, 'Scarecrow', 'Scarecrow is a fictional supervillain appearing in comic books published by DC Comics. Created by writer Bill Finger and artist Bob Kane, the character first appeared in World\'s Finest Comics #3 in September 1941. Scarecrow is often depicted as an enemy of Batman, using his fear toxin to manipulate and terrorize his victims.');
  const penguinCard = createVillainCard(penguin, 'Penguin', 'The Penguin is a fictional supervillain appearing in comic books published by DC Comics. Created by Bob Kane and Bill Finger, the character first appeared in Detective Comics #58 in December 1941. The Penguin is a master criminal and one of Batman\'s oldest and most persistent foes, known for his love of birds and his trick umbrellas.');
  const harleyCard = createVillainCard(harley, 'Harley Quinn', 'Harley Quinn is a fictional character appearing in comic books published by DC Comics. Created by Paul Dini and Bruce Timm, she first appeared in Batman: The Animated Series in September 1992. Harley Quinn is a frequent accomplice and lover of the Joker, and is known for her playful and unpredictable nature.');

  villainsContainer.appendChild(jokerCard);
  villainsContainer.appendChild(baneCard);
  villainsContainer.appendChild(freezeCard);
  villainsContainer.appendChild(ivyCard);
  villainsContainer.appendChild(riddlerCard);
  villainsContainer.appendChild(scarecrowCard);
  villainsContainer.appendChild(penguinCard);
  villainsContainer.appendChild(harleyCard);

  return { villainsHeadline, villainsContainer };
};

export default Villains;
