let responseData = {data: [['teams', 'wins', 'losses', 'ties', 'championships'], ['bombers', 20, 0, 3, 18], ['jets', 40, 7, 2, 3], ['cosmonauts', 10, 100, 86, 8], ['korichugh', 90, 3, 56, 6], ['chiliPeppers', 28, 37, 2, 0]]};
let currentSortingColumn = 1;
let isAscending = false;

var sortedData = sortData();
updateTable(sortedData);

function updateTable(data) {
  var html = nunjucks.render('statsTable.html', {
    table: data,
    currentSortingColumn: currentSortingColumn,
    isAscending: isAscending
  });
  var table = document.querySelector('#statsTable');
  table.innerHTML = html;
}

function sortData() {
  var sortedData = responseData.data.slice(1).sort((a, b) => {
    a = a[currentSortingColumn];
    b = b[currentSortingColumn];
    if (a == b) {
      return 0;
    } else if ((isAscending && (a > b)) || ((!isAscending) && (b > a))) {
      return 1;
    } else {
      return -1;
    }
  })
  return [responseData.data[0], ...sortedData];
}

function handleSort(th) {
  var targetIndex = Array.prototype.indexOf.call(th.parentNode.children, th);
  if (targetIndex !== currentSortingColumn) {
    isAscending = false;
    currentSortingColumn = targetIndex;
    updateTable(sortData());
  }
  else {
    isAscending = !isAscending;
    updateTable(sortData());
  }
}
