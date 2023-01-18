function loadMenu() {
    let content = document.getElementById('content');

    let title = document.createElement('h1');
    title.textContent = "Menu";
    title.classList.add('menu-title');

    let largePint = document.createElement('div');
    largePint.classList.add('menu-item');
    let largePintImage = document.createElement('img');
    let largePintTitle = document.createElement('h2');
    largePintTitle.textContent = "Large Pint"
    largePintImage.src = "./images/tankard.png";
    largePintImage.classList.add('pint-image');
    let largePintDescription = document.createElement('p');
    largePintDescription.textContent = "A large pint of the finest mead you'll find anywhere outside of Gondor.";

    let largePintContainer = document.createElement('div');
    largePintContainer.appendChild(largePintTitle);
    largePintContainer.appendChild(largePintDescription);

    let xLargePint = document.createElement('div');
    xLargePint.classList.add('menu-item')
    let xLargePintImage = document.createElement('img');
    let xLargePintTitle = document.createElement('h2');
    xLargePintTitle.textContent = "Extra Large Pint";
    xLargePintImage.src = "./images/tankard.png";
    xLargePintImage.classList.add('pint-image');
    let xLargePintDescription = document.createElement('p');
    xLargePintDescription.textContent = "The same high quality mead served in an extra large tankard for those who want an extra serving.";

    let xLargePintContainer = document.createElement('div');
    xLargePintContainer.appendChild(xLargePintTitle);
    xLargePintContainer.appendChild(xLargePintDescription);

    let dinner = document.createElement('div');
    dinner.classList.add('menu-item');
    let dinnerImage = document.createElement('img');
    let dinnerTitle = document.createElement('h2');
    dinnerTitle.textContent = "The Prancing Pony Special";
    dinnerImage.src = "./images/dinner.png";
    dinnerImage.classList.add('dinner-image');
    let dinnerDescription = document.createElement('p');
    dinnerDescription.textContent = "An assortment of our finest meats, breads, and cheeses. Revitalising for those weary from a long journey.";

    let dinnerContainer = document.createElement('div');
    dinnerContainer.appendChild(dinnerTitle);
    dinnerContainer.appendChild(dinnerDescription);    

    largePint.appendChild(largePintImage);
    largePint.appendChild(largePintContainer);
    xLargePint.appendChild(xLargePintImage);
    xLargePint.appendChild(xLargePintContainer);
    dinner.appendChild(dinnerImage);
    dinner.appendChild(dinnerContainer);

    content.appendChild(title);
    content.appendChild(largePint);
    content.appendChild(xLargePint);
    content.appendChild(dinner);
}

export default loadMenu;