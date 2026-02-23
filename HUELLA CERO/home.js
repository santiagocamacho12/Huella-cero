function ocultarSecciones() {
    const secciones = [
        'inicio',
        'calculadora_huella',
        'monitoreo_consumo',
        'guia_reciclaje',
        'proyectos_ambientales',
        'educacion_recursos',
        'recompensas'
    ];
    
    secciones.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.style.display = 'none';
        }
    });
}

function actualizarMenu(elemento) {
    const links = document.querySelectorAll('.options__menu a');
    links.forEach(link => link.classList.remove('selected'));
    
    if (elemento) {
        elemento.classList.add('selected');
    }
}

function mostrarHome(elemento) {
    ocultarSecciones();
    document.getElementById('inicio').style.display = 'block';
    actualizarMenu(elemento);
}

function mostrarCalculadora(elemento) {
    ocultarSecciones();
    document.getElementById('calculadora_huella').style.display = 'block';
    actualizarMenu(elemento);
}

function mostrarMonitoreoConsumo(elemento) {
    ocultarSecciones();
    document.getElementById('monitoreo_consumo').style.display = 'block';
    actualizarMenu(elemento);
}

function mostrarGuiaReciclaje(elemento) {
    ocultarSecciones();
    document.getElementById('guia_reciclaje').style.display = 'block';
    actualizarMenu(elemento);
}

function mostrarProyectosAmbientales(elemento) {
    ocultarSecciones();
    document.getElementById('proyectos_ambientales').style.display = 'block';
    actualizarMenu(elemento);
}

function mostrarEducacionRecursos(elemento) {
    ocultarSecciones();
    document.getElementById('educacion_recursos').style.display = 'block';
    actualizarMenu(elemento);
}

function mostrarRecompensas(elemento) {
    ocultarSecciones();
    document.getElementById('recompensas').style.display = 'block';
    actualizarMenu(elemento);
}
