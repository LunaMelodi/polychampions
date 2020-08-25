var nunjucks = require('nunjucks');
var fs = require('fs');
var teams = require('../data/teamsData.js');


function makeFolder(path) {
    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
}


function transferFolder(folder) {
    makeFolder('dist/' + folder);
    var files = fs.readdirSync('src/' + folder);
    for (file of files) {
        file = folder + '/' + file;
        if (fs.lstatSync('src/' + file).isDirectory()) {
            transferFolder(file);
        } else {
            fs.copyFileSync('src/' + file, 'dist/' + file);
        }
    }
}


function render(template, target, context) {
    var html = nunjucks.render('src/templates/' + template + '.njk', context);
    fs.writeFileSync('dist/' + target + '.html', html)
}

function renderFolder(folder) {
    makeFolder('dist/' + folder);
    var files = fs.readdirSync('src/view-content/' + folder);
    for (file of files) {
        var title = file.slice(0, file.length - 5);
        var body = fs.readFileSync('src/view-content/' + folder + '/' + file);
        render('root', folder + '/' + title, { title: title, body: body })
    }
}

makeFolder('dist');
makeFolder('dist/teams');
for (team of teams.allTeams) {
    render('team', 'teams/' + team.shortName, { team: team });
}
render('index', 'index', {});
renderFolder('stats');
renderFolder('guides');
transferFolder('js');
