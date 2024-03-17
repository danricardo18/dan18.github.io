document.addEventListener('DOMContentLoaded', () => {
    const proyectos = document.querySelectorAll('.proyecto');

    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseover', () => {
            proyecto.classList.add('destacado');
        });

        proyecto.addEventListener('mouseout', () => {
            proyecto.classList.remove('destacado');
        });
    });
});
