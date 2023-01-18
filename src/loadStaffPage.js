function loadStaffPage() {
    let content = document.getElementById('content');

    let title = document.createElement('h1');
    title.textContent = "Staff";
    title.classList.add('staff-title');

    let barliman = document.createElement('div');
    barliman.classList.add('staff-item');
    let barlimanImage = document.createElement('img');
    barlimanImage.src = "./images/barliman.png";
    barlimanImage.classList.add('barliman-image');
    let barlimanName = document.createElement('h3');
    barlimanName.textContent = "Barliman Butterbur";
    let barlimanDescription = document.createElement('p');
    barlimanDescription.textContent = "Owner and  Innkeeper of the Prancing Pony. Excellent at pouring mead, but will not remember to deliver letters for you.";

    let barlimanText = document.createElement('div');
    barlimanText.classList.add('text-container')
    barlimanText.appendChild(barlimanName);
    barlimanText.appendChild(barlimanDescription);
    barliman.appendChild(barlimanImage);
    barliman.appendChild(barlimanText);

    let nob = document.createElement('div');
    nob.classList.add('staff-item');
    let nobImage = document.createElement('img');
    nobImage.src = "./images/nob.png";
    nobImage.classList.add('nob-image');
    let nobName = document.createElement('h3');
    nobName.textContent = "Nob";
    let nobDescription = document.createElement('p');
    nobDescription.textContent = "General servant of the Prancing Pony and assistant to Barliman Butterbur.";

    let nobText = document.createElement('div');
    nobText.classList.add('text-container');
    nobText.appendChild(nobName);
    nobText.appendChild(nobDescription);
    nob.appendChild(nobImage);
    nob.appendChild(nobText);

    let bob = document.createElement('div');
    bob.classList.add('staff-item');
    let bobImage = document.createElement('img');
    bobImage.src = "./images/bob.png";
    bobImage.classList.add('bob-image');
    let bobName = document.createElement('h3');
    bobName.textContent = "Bob";
    let bobDescription = document.createElement('p');
    bobDescription.textContent = "Head ostler at the Prancing Pony and assistant to Barliman Butterbur.";

    let bobText = document.createElement('div');
    bobText.classList.add('text-container');
    bobText.appendChild(bobName);
    bobText.appendChild(bobDescription);
    bob.appendChild(bobImage);
    bob.appendChild(bobText);

    content.appendChild(title);
    content.appendChild(barliman);
    content.appendChild(nob);
    content.appendChild(bob);
}

export default loadStaffPage;