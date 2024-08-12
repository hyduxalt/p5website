var m_theme = "dark"
var backgroundColor = {r:20, g:20, b:20}
var outlineColor = 180
var highlightColor = {r:200, g:255, b:40}
var lighterColor = 100
var darkerColor = 50

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    theme(newColorScheme)
});

function theme(newColorScheme) {
    if(newColorScheme == "dark") {
        backgroundColor = {r:20, g:20, b:20}
        outlineColor = 180
        highlightColor = {r:200, g:255, b:40}
        lighterColor = 100
        darkerColor = 50
        m_theme = "dark"
    } else {
        backgroundColor = {r:255, g:255, b:255}
        outlineColor = 120
        lighterColor = 200
        darkerColor = 240
        highlightColor = {r:40, g:40, b:40}
        m_theme = "light"
    }
}

if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
    m_theme = "light"
    theme("light")
    document.getElementById('toggleTheme').innerText = "Dark mode"
}

document.getElementById('toggleTheme').addEventListener('click', () => {
    if(m_theme == "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        theme("light")
        m_theme = "light"
        document.getElementById('toggleTheme').innerText = "Dark mode"
    }
    else {
        document.documentElement.setAttribute("data-theme", "dark");
        theme("dark")
        m_theme = "dark"
        document.getElementById('toggleTheme').innerText = "Light mode"
    }
});
