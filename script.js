const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#f9f9f9';
        document.body.style.color = '#333';
    }
});
