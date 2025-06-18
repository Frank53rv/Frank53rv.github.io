// Cambiar el color de los iconos sociales al pasar el mouse
var socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(function (icon) {
    icon.addEventListener('mouseover', function () {
        icon.classList.add('text-blue-500');
    });
    icon.addEventListener('mouseout', function () {
        icon.classList.remove('text-blue-500');
    });
});

// Cambiar el idioma de la página
const languageToggle = document.getElementById('languageToggle');
let isEnglish = false;

languageToggle.addEventListener('click', () => {
    if (!isEnglish) {
        // Cambiar al inglés
        document.querySelector('#infoSection h2').textContent = 'About Me';
        document.querySelector('#infoSection p').textContent = 'I am a web developer with experience in HTML, CSS, JavaScript, focused more on Backend development with Ruby on Rails.';
        document.querySelector('#toolsSection h2').textContent = 'Tools';
        document.querySelector('#projectsSection h2').textContent = 'Projects';
        document.querySelector('#languagesSection h2').textContent = 'Languages';
        document.querySelector('#languagesSection ul li:nth-child(1) p').textContent = 'Spanish';
        document.querySelector('#languagesSection ul li:nth-child(2) p').textContent = 'English';
        document.querySelector('#contactSection h2').textContent = 'Contact';
        document.querySelector('#contactSection p').innerHTML = 'You can contact me via email at <a href="mailto:frankitov23@gmail.com">frankitov23@gmail.com</a> or through my LinkedIn profile.';
        languageToggle.textContent = 'Cambiar a Español';
        isEnglish = true;
    } else {
        // Cambiar al español
        document.querySelector('#infoSection h2').textContent = 'Acerca de mí';
        document.querySelector('#infoSection p').textContent = 'Soy un desarrollador web con experiencia en HTML, CSS, JavaScript, enfocado más en el área del Backend con Ruby on Rails.';
        document.querySelector('#toolsSection h2').textContent = 'Herramientas';
        document.querySelector('#projectsSection h2').textContent = 'Proyectos';
        document.querySelector('#languagesSection h2').textContent = 'Idiomas';
        document.querySelector('#languagesSection ul li:nth-child(1) p').textContent = 'Español';
        document.querySelector('#languagesSection ul li:nth-child(2) p').textContent = 'Inglés';
        document.querySelector('#contactSection h2').textContent = 'Contacto';
        document.querySelector('#contactSection p').innerHTML = 'Puedes contactarme a través de mi correo electrónico <a href="mailto:frankitov23@gmail.com">frankitov23@gmail.com</a> o mediante mi perfil de LinkedIn.';
        languageToggle.textContent = 'Change to English';
        isEnglish = false;
    }
});
