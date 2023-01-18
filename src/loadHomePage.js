function loadHomePage() {
    let content = document.getElementById('content');

    let headerImg = document.createElement('img');
    headerImg.src = './PrancingPony.jpg';
    headerImg.alt = 'The Prancing Pony';
    headerImg.id = 'prancing-pony-img';
    
    let quote = document.createElement('div');
    quote.id = 'quote';
    let quoteText = document.createElement('p');
    quoteText.textContent = "Welcome to the Prancing Pony by Barliman Butterbur! The best food, drink, and company you'll find in the lands between the Shire and Rivendell.";
    quote.appendChild(quoteText);
    
    let historicalGuests = document.createElement('div');
    historicalGuests.id = 'historical-guests';
    let guestDesciption = document.createElement('p');
    guestDesciption.textContent = "The Prancing Pony is the favorite inn of many famous figures in history including:";
    let guestList = document.createElement('ul');
    let aragorn = document.createElement('li');
    aragorn.textContent = "King Elessar / Aragorn / Strider";
    let gandalf = document.createElement('li');
    gandalf.textContent = "Gandalf the Grey";
    let frodo = document.createElement('li');
    frodo.textContent = "Frodo Baggins";
    let sam = document.createElement('li');
    sam.textContent = "Samwise Gamgee";
    let merry = document.createElement('li');
    merry.textContent = "Meriadoc Brandybuck";
    let pippin = document.createElement('li');
    pippin.textContent = "Peregrin Took";
    
    guestList.appendChild(aragorn);
    guestList.appendChild(gandalf);
    guestList.appendChild(frodo);
    guestList.appendChild(sam);
    guestList.appendChild(merry);
    guestList.appendChild(pippin);
    
    historicalGuests.appendChild(guestDesciption);
    historicalGuests.appendChild(guestList);
    
    content.appendChild(headerImg);
    content.appendChild(quote);
    content.appendChild(historicalGuests);
}

export default loadHomePage;