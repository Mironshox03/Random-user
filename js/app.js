let DarkBtn = document.querySelector('#dark-btn'),
    LightBtn = document.querySelector('#light-btn'),
    body = document.querySelector('body'),
    theme ;

function DarkMode() {
    DarkBtn.classList.add('hidden');
    LightBtn.classList.remove('hidden');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        theme = "DARK"
    }else{
        theme = "LIGHT"
    }
    localStorage.setItem('theme' , JSON.stringify(theme) )
}
function LightMode() {
    DarkBtn.classList.remove('hidden');
    LightBtn.classList.add('hidden');
    body.classList.toggle('dark-mode');
    if (body.classList.contains(' ')) {
        theme = "LIGHT"
    }else{
        theme = "DARK"
    }
    localStorage.setItem('theme' , JSON.stringify(theme) )
}
let mode = JSON.parse(localStorage.getItem('theme'));

if (mode == 'DARK') {
    body.classList.add('dark-mode')
}
DarkBtn.addEventListener('click' , () => {
    DarkMode()
});

LightBtn.addEventListener('click' , () => {
    LightMode()
})