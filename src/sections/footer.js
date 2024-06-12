import batsignal from '../images/batsignal.jpg';

const Footer = () => {
  const footerContainer = document.createElement('div');
  const footerText = document.createElement('div');
  const footerImage = document.createElement('img');
  const footerTextHeading = document.createElement('h2');
  const footerTextParagraph = document.createElement('p');
  const footerTextIcons = document.createElement('div');
  const iconX = document.createElement('i');
  const iconLinkedIn = document.createElement('i');
  const iconGitHub = document.createElement('i');

  footerContainer.classList.add('footer_container');
  footerText.classList.add('footer_text');
  footerImage.classList.add('footer_img');
  footerTextHeading.classList.add('footer_heading');
  footerTextParagraph.classList.add('footer_paragraph');
  footerTextIcons.classList.add('footer_icons');
  iconX.classList.add('devicon-twitter-original');
  iconLinkedIn.classList.add('devicon-linkedin-plain');
  iconGitHub.classList.add('devicon-github-original');

  footerImage.src = batsignal;
  footerImage.alt = 'Batman logo';
  footerTextHeading.textContent = 'Contact Me';
  footerTextParagraph.innerHTML = 'Please get in touch if you have any questions or would like to collaborate on a project.<br><br>dev.vinatzer@gmail.com';
  footerTextIcons.appendChild(iconX);
  footerTextIcons.appendChild(iconLinkedIn);
  footerTextIcons.appendChild(iconGitHub);
  footerText.appendChild(footerTextHeading);
  footerText.appendChild(footerTextParagraph);
  footerText.appendChild(footerTextIcons);
  footerContainer.appendChild(footerText);
  footerContainer.appendChild(footerImage);
  return footerContainer;
};

export default Footer;
