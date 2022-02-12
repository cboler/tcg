document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle();
    let classList = document.getElementById('toggle-dark-mode-span').classList;
    // todo: fix
    // the class is properly applying, but the icon isn't showing up.
    classList.remove(isDarkMode ? 'icon-light-up' : 'icon-light-down');
    classList.add(isDarkMode ? 'icon-light-down' : 'icon-light-up');
});

// toggley button
document.getElementById('home-button').addEventListener('click', async () => {
    let classList = document.getElementById('home-button').classList;
    if(classList.contains('active')){
        classList.remove('active');
    } else {
        classList.add('active');
    }
});

// todo:
// use a toggle button instead of a slider for dark mode maybe?