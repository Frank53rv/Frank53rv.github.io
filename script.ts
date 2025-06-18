// Cambiar el color de los iconos sociales al pasar el mouse
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
        icon.classList.add('text-blue-500');
    });

    icon.addEventListener('mouseout', () => {
        icon.classList.remove('text-blue-500');
    });
});