
export default function generateTeamPage(teamData) {
  console.log("team script");
  
  let teamContentContainer = document.createElement('div');
  
  let teamNameHeading = document.createElement('h1');
  teamNameHeading.innerText = teamData.proName +' and '+ teamData.minorName;
  teamContentContainer.appendChild(teamNameHeading);
  
  let aboutHeading = document.createElement('h3');
  aboutHeading.innerText = 'About '+ teamData.proName +':';
  teamContentContainer.appendChild(aboutHeading);

  let aboutSection = document.createElement('p');
  aboutSection.innerText = teamData.about;
  teamContentContainer.appendChild(aboutSection);

  let historyHeading = document.createElement('h3');
  historyHeading.innerText = 'Team History:';
  teamContentContainer.appendChild(historyHeading);

  let historySection = document.createElement('p');
  historySection.innerText = teamData.history;
  teamContentContainer.appendChild(historySection);

  if(teamData.trophies.length > 0) {
    let trophyHeader = document.createElement('h3');
    trophyHeader.innerText = 'Trophies:'
    teamContentContainer.appendChild(trophyHeader);
    
    let trophySection = document.createElement('p');
    trophySection.innerText = teamData.trophies.length > 1 ? teamData.trophies.join(', ') : teamData.trophies[0];
    teamContentContainer.appendChild(trophySection);
  }

  let teamContentPlaceholder = document.querySelector('#teamContentPlaceholder');
  teamContentPlaceholder.appendChild(teamContentContainer);
}
