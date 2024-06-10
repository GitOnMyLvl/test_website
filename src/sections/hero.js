import batman480 from '../images/batman_480.jpg';
import batman576 from '../images/batman_576.jpg';

const Hero = () => {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('hero_container');
  const img = document.createElement('img');
  const heading = document.createElement('h1');
  const aboutMe = document.createElement('div');
  const aboutMeHeading = document.createElement('h2');
  const aboutMeText = document.createElement('p');

  img.classList.add('hero_img');
  heading.classList.add('hero_heading');
  aboutMe.classList.add('hero_about_me');
  aboutMeHeading.classList.add('hero_about_me_heading');
  aboutMeText.classList.add('hero_about_me_text');
  img.alt = 'Batman standing on a rooftop';
  img.src = batman480;
  img.srcset = `
    ${batman480} 480w,
    ${batman576} 576w,
  `;
  img.sizes = `
    70vmin
  `;
  heading.textContent = 'I am Batman';
  aboutMeHeading.textContent = 'About Me';
  aboutMeText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  aboutMe.appendChild(aboutMeHeading);
  aboutMe.appendChild(aboutMeText);
  imgContainer.appendChild(img);
  imgContainer.appendChild(heading);
  imgContainer.appendChild(aboutMe);
  return imgContainer;
};

export default Hero;
