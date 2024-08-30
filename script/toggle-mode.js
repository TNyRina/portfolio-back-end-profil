let theme_mode = document.getElementById('theme-mode');
let dark = false
let toggle_button = document.getElementById('toggle-mode');
let toggle_button_container = document.getElementById('toggle-mode-container');
let icon_mode = document.getElementById('icon-mode');

toggle_button.addEventListener('click', function(){
    if(dark){
        theme_mode.href = './style/root-light-mode.css';
        toggle_button_container.style.justifyContent = 'start';
        icon_mode.classList.remove('bi-moon-stars-fill');
        icon_mode.classList.add('bi-brightness-high-fill');
        dark = false;
    }else{
        theme_mode.href = './style/root-dark-mode.css';
        toggle_button_container.style.justifyContent = 'end';
        icon_mode.classList.remove('bi-brightness-high-fill');
        icon_mode.classList.add('bi-moon-stars-fill');
        dark = true;
    }
});