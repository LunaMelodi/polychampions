let responseData = {data: [['teams', 'wins ⬇️', 'losses ⬇️', 'ties ⬇️', 'championships ⬇️'], ['bombers', 20, 0, 3, 18], ['jets', 40, 7, 2, 3], ['cosmonauts', 10, 100, 86, 8], ['korichugh', 90, 3, 56, 6], ['chiliPeppers', 28, 37, 2, 0]]};
let currentSortingColumn = 1;
let isAscending = false;
let sortedData;

sortedData = sortData();
createAndAddTable(sortedData);

function sortData(col = 1, isAscending = false) {
  if (col === 0 || col >= responseData.data[0].length) {
    console.log('bad column. aborting sortData()!');
    return;
  }

  let runOnce = false;
  var sortedData = responseData.data.slice(1).sort((a, b) => {

    if (isAscending) {
      if (!runOnce) console.log('sortData() sorting by ascending');
      runOnce = true;

      return a[col] - b[col];
    }
    else {
      if (!runOnce) console.log('sortData() sorting by descending');
      runOnce = true;

      return b[col] - a[col];
    }
  })

  return [responseData.data[0], ...sortedData];
}

function createAndAddTable(data) {
  let statsTable;
  if (statsTable = document.querySelector('#statsTable')) {
    document.body.removeChild(statsTable);
  }

  let table = document.createElement("table");
  table.id = "statsTable";
  addDataToTable(table, data)

  document.body.appendChild(table);

  console.log('created new table');
}

function addDataToTable(table, data) {
  createAndAddThRow(table, data[0]);

  for (let row = 1; row < data.length; row++) {
    createAndAddTdRow(table, data[row]);
  }
}

function createAndAddThRow(table, thContents) {
  newRow = document.createElement('tr');
  for (let thContent of thContents) {
    newRow.appendChild(createCell('th', thContent));
  }

  newRow.addEventListener('click', handleSort);

  table.appendChild(newRow);
}

function createAndAddTdRow(table, tdContents) {
  newRow = document.createElement('tr');
  for (let tdContent of tdContents) {
    newRow.appendChild(createCell('td', tdContent));
  }
  table.appendChild(newRow);
}

function createCell(tdOrTh, content) {
  newCell = document.createElement(tdOrTh);
  newCell.innerText = content
  return newCell;
}


function handleSort(evt) {
  let targetIndex = getIndexFromInnerTextTarget(evt.target.innerText);
  if (targetIndex === 0 || targetIndex >= responseData.data[0].length) {
    return;
  }

  if (targetIndex !== currentSortingColumn) {
    console.log('switch to sorting the '+ responseData.data[0][targetIndex] +' column by descending');
    isAscending = false;
    currentSortingColumn = targetIndex;
    createAndAddTable(sortData(targetIndex, isAscending));
  }
  else {

    console.log('toggle isAscending');
    console.log('isAscending before: '+ isAscending);
    isAscending = !isAscending;
    console.log('isAscending after: '+ isAscending);
    createAndAddTable(sortData(targetIndex, isAscending));
  }
}

function getIndexFromInnerTextTarget(innerText) {
  return responseData.data[0].findIndex(th => th === innerText)
}
