document.addEventListener('DOMContentLoaded', function() {
    // Agregar efecto de animación a los iconos sociales al pasar el mouse sobre ellos
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.classList.add('animate');
        });
        icon.addEventListener('mouseout', () => {
            icon.classList.remove('animate');
        });
    });

    // Agregar efecto de animación a los botones al pasar el mouse sobre ellos
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('animate');
        });
        button.addEventListener('mouseout', () => {
            button.classList.remove('animate');
        });
    });


   /* document.querySelectorAll('.project-filter').forEach(filter => {
        filter.addEventListener('click', () => {
            const filterValue = filter.getAttribute('data-filter');
            document.querySelectorAll('.project').forEach(project => {
                if (filterValue === 'todos' || project.classList.contains(filterValue)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});*/
