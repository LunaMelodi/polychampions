
export default function generateTeamPage(teamData) {
  console.log("team script");
  
  console.log("hi. teamInfo.proName: "+ teamData.proName);
  
  let teamContentContainer = document.createElement('div');
  
  let teamNameHeading = document.createElement('h1');
  teamNameHeading.innerText = teamData.proName;
  teamContentContainer.appendChild(teamNameHeading);
  
  let aboutHeading = document.createElement('h3');

  let teamContentPlaceholder = document.querySelector('#teamContentPlaceholder');
  teamContentPlaceholder.appendChild(teamContentContainer);
}
