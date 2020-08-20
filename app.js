const app = document.getElementById("app");
window.run = () => app.innerText="Fun!";
app.innerHTML = '<button onclick="run()">Load</button>';