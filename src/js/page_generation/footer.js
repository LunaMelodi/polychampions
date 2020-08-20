console.log("footer script");

let footerContainer = document.createElement('div');
let footerText = document.createElement('p');
footerText.innerText = 'PolyChampions website footer. Created by Luna. Stats brought to you with help from Legorooj, Nelluk, and the PolyChampions stats team. Graphics done by Newt.\n\n Join now on Discord!';

footerContainer.appendChild(footerText);

let footerPlaceholder = document.querySelector('#footerPlaceholder');
footerPlaceholder.appendChild(footerContainer);

