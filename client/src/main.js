const nunjucks = require('nunjucks');
const fs = require('fs');
const teams = require('./data/teamsData.js');

const PLACEHOLDER = `There's nothing here yet. If you have something to write,
 <a href="https://github.com/lunamelodi/polychampions">contribute on GitHub</a>
 or <a href="https://artemisdev.xyz">contact Artemis</a>.`;
const HOST = 'https://beta.polytopia.win';

function makeFolder(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}

function transferFolder(folder) {
    makeFolder('dist/' + folder);
    const files = fs.readdirSync('src/' + folder);
    for (var file of files) {
        file = folder + '/' + file;
        if (fs.lstatSync('src/' + file).isDirectory()) {
            transferFolder(file);
        } else {
            fs.copyFileSync('src/' + file, 'dist/' + file);
        }
    }
}

function render(template, target, context) {
    context.url = `${HOST}/${target}`;
    context.host = HOST;
    const html = nunjucks.render('src/templates/' + template + '.njk', context);
    fs.writeFileSync('dist/' + target + '.html', html)
}

function renderFolder(folder, template) {
    makeFolder('dist/' + folder);
    const files = fs.readdirSync('src/view-content/' + folder);
    for (const file of files) {
        const title = file.slice(0, file.length - 5);
        const body = fs.readFileSync('src/view-content/' + folder + '/' + file);
        render(template, folder + '/' + title, { title: title, body: body })
    }
}

makeFolder('dist/teams');

for (var team of teams.allTeams) {
    team.about = team.about || PLACEHOLDER;
    team.history = team.history || PLACEHOLDER;
    render('team', 'teams/' + team.shortName, { team: team });
}

for (const page of [ 'index', 'about', '404' ]) {
    render(page, page, {});
}
render('team_index', 'teams/index', { teams: teams.allTeams });
// No content here yet, templates need updating/creating when there is.
// renderFolder('stats', 'stats');
// renderFolder('guides', 'root');
transferFolder('js');
