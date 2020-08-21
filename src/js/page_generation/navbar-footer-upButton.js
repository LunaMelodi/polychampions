// NAVBAR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("navbar script");

let ulNavbarContainer = document.createElement('ul');

let liPClogo = document.createElement('li');
liPClogo.innerHTML = '<a href="/index">PolyChampions</a>';
ulNavbarContainer.appendChild(liPClogo);

let liTeams = document.createElement('li');
liTeams.innerHTML = '<a href="/teams">Teams</a>';
ulNavbarContainer.appendChild(liTeams);

let liStats = document.createElement('li');
liStats.innerHTML = '<a href="/stats">Stats</a>';
ulNavbarContainer.appendChild(liStats);

let liGuides = document.createElement('li');
liGuides.innerHTML = '<a href="/guides">Guides</a>';
ulNavbarContainer.appendChild(liGuides);

let navbarPlaceholder = document.querySelector('#navbarPlaceholder');
navbarPlaceholder.appendChild(ulNavbarContainer);


// FOOTER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("footer script");

let footerContainer = document.createElement('div');
let footerText = document.createElement('p');
footerText.innerText = 'PolyChampions website footer. Created by Luna. Stats brought to you with help from Legorooj, Nelluk, and the PolyChampions stats team. Graphics done by Newt.\n\n Join now on Discord!';

footerContainer.appendChild(footerText);

let footerPlaceholder = document.querySelector('#footerPlaceholder');
footerPlaceholder.appendChild(footerContainer);