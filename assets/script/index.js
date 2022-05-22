function handleMouseEnter(){

  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
  this.classList.remove ('s-card--hovered');
  document.body.id = ``;
}

function addEventListernersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  

  for (let index = 0; index < cardElements.length; index++){

    const card = cardElements[index];
    card.addEventListener ('mouseenter', handleMouseEnter);
    card.addEventListener ('mouseleave', handleMouseLeave);
}
}
document.addEventListener("DOMContentLoaded", addEventListernersToCards, false);

function selectCarrouselItem(selectedButtomElement){
  const selectedItem = selectedButtomElement.id;
  const carrousel = document.querySelector('.s-cards-carrousel');
  const transform = carrousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYdeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYdeg}deg)`);
  
  carrousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtomElement.classList.add('s-controller__button--active');
}