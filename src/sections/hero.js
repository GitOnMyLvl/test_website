import batman480 from '../images/batman_480.jpg';
import batman960 from '../images/batman_960.jpg';
import batman1160 from '../images/batman_1160.jpg';

const Hero = () => {
  const backgroundContainer = document.createElement('div');
  const heroContainer = document.createElement('section');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const heading = document.createElement('h1');
  const aboutMe = document.createElement('div');
  const aboutMeHeading = document.createElement('h2');
  const aboutMeText = document.createElement('p');
  const aboutMeIcons = document.createElement('div');
  const iconX = document.createElement('i');
  const iconLinkedIn = document.createElement('i');
  const iconGitHub = document.createElement('i');

  backgroundContainer.classList.add('background_container');
  heroContainer.classList.add('hero_section');
  imgContainer.classList.add('hero_container');
  img.classList.add('hero_img');
  heading.classList.add('hero_heading');
  aboutMe.classList.add('hero_about_me');
  aboutMeHeading.classList.add('hero_about_me_heading');
  aboutMeText.classList.add('hero_about_me_text');
  aboutMeIcons.classList.add('hero_about_me_icons');
  iconX.classList.add('devicon-twitter-original');
  iconLinkedIn.classList.add('devicon-linkedin-plain');
  iconGitHub.classList.add('devicon-github-original');

  img.src = batman1160;
  img.srcset = `
    ${batman480} 480w,
    ${batman960} 960w,
    ${batman1160} 1160w
  `;
  img.sizes = `
    (max-width: 980px) 90vw,
    (max-width: 1200px) 70vw,
    40vw
  `;
  img.alt = 'Batman standing on a rooftop';
  heading.textContent = 'I am Batman';
  aboutMeHeading.textContent = 'About Me';
  aboutMeText.innerHTML = `My mission is to protect the innocent and bring justice to those who believe they are above the law. Trained to the peak of human potential, I have mastered martial arts, detective work, and the art of stealth. I work from the shadows, striking fear into the hearts of those who prey on the weak.<br>
  Allies in this mission are few, but those who join me share an unwavering commitment to justice. Trust is earned and seldom given, but when it is, it becomes a powerful bond. I fight not for glory or recognition, but for the hope that someday, Gotham can rise from its darkness.<br>
  The night is my ally, and fear is my weapon. I am relentless, vigilant, and always watching.<br> 
  I am vengeance. I am the night. I am Batman.`;
  aboutMeIcons.appendChild(iconX);
  aboutMeIcons.appendChild(iconLinkedIn);
  aboutMeIcons.appendChild(iconGitHub);
  aboutMe.appendChild(aboutMeHeading);
  aboutMe.appendChild(aboutMeText);
  aboutMe.appendChild(aboutMeIcons);
  imgContainer.appendChild(img);
  imgContainer.appendChild(heading);
  heroContainer.appendChild(backgroundContainer);
  heroContainer.appendChild(imgContainer);
  heroContainer.appendChild(aboutMe);
  return heroContainer;
};

export default Hero;
