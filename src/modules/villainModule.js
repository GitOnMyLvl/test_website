const createVillainCard = (img, name, description) => {
  const card = document.createElement('div');
  const imgContainer = document.createElement('div');
  const imgElement = document.createElement('img');
  const textContainer = document.createElement('div');
  const nameElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  card.classList.add('villain_card');
  imgContainer.classList.add('villain_img_container');
  imgElement.classList.add('villain_img');
  textContainer.classList.add('villain_text_container');
  nameElement.classList.add('villain_name');
  descriptionElement.classList.add('villain_description');

  imgElement.src = img;
  nameElement.textContent = name;
  descriptionElement.textContent = description;

  imgContainer.appendChild(imgElement);
  textContainer.appendChild(nameElement);
  textContainer.appendChild(descriptionElement);
  card.appendChild(imgContainer);
  card.appendChild(textContainer);

  return card;
};

export default createVillainCard;
