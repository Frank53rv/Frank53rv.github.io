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
