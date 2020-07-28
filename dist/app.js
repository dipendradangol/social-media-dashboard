
/* document.querySelector('.dark-mode')[0].addEventListener
('click', () => {
    document.body.classList.toggle('light')
}); */
const body = document.querySelector('body');
const themeMode = document.querySelector(".switch");
console.log(themeMode);
themeMode.addEventListener('click', function() {
    body.classList.add('light')
})