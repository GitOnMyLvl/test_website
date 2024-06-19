import batman480 from '../images/batman_480.jpg';
import batman960 from '../images/batman_960.jpg';
import batman1160 from '../images/batman_1160.jpg';

const Hero = () => {
  const backgroundContainer = document.createElement('div');
  const heroSection = document.createElement('section');
  const heroContainer = document.createElement('div');
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
  heroSection.classList.add('hero_section');
  heroContainer.classList.add('hero_container');
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
    (max-width: 980px) 80vw,
    (max-width: 1200px) 70vw,
    30vw
  `;
  img.alt = 'Batman standing on a rooftop';
  heading.textContent = 'I am Batman';
  aboutMeHeading.textContent = 'About Me';
  aboutMeText.innerHTML = `My mission is to protect the innocent and bring justice to those who believe they are above the law. <br>
  I fight not for glory or recognition, but for the hope that someday, Gotham can rise from its darkness.<br>
  The night is my ally, and fear is my weapon. I am relentless, vigilant, and always watching.<br> 
  I am vengeance. I am the night. I am Batman.`;
  aboutMeIcons.appendChild(iconX);
  aboutMeIcons.appendChild(iconLinkedIn);
  aboutMeIcons.appendChild(iconGitHub);
  aboutMe.appendChild(aboutMeHeading);
  aboutMe.appendChild(aboutMeText);
  aboutMe.appendChild(aboutMeIcons);
  heroContainer.appendChild(backgroundContainer);
  heroContainer.appendChild(heading);
  heroContainer.appendChild(img);
  heroContainer.appendChild(aboutMe);
  heroSection.appendChild(heroContainer);
  return heroSection;
};

export default Hero;
