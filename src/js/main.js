var nunjucks = require('nunjucks');
var fs = require('fs');
var teams = require('../data/teamsData.js')


function render(template, target, context) {
    var html = nunjucks.render('src/templates/' + template + '.njk', context);
    fs.writeFileSync('src/' + target + '.html', html)
}

function renderFolder(folder) {
    var files = fs.readdirSync('src/data/' + folder);
    for (file of files) {
        var title = file.slice(0, file.length - 5);
        var body = fs.readFileSync('src/data/' + folder + '/' + file);
        render('root', folder + '/' + title, { title: title, body: body })
    }
}

for (team of teams.allTeams) {
    render('team', 'teams/' + team.shortName, { team: team });
}
render('index', 'index', {});
renderFolder('stats')
renderFolder('guides')
