// Obtener referencias a los paneles
var panelIzquierdo = document.getElementById('izquierda');
var panelDerecho = document.getElementById('derecha');

// Establecer el evento de arrastre en el panel izquierdo
panelIzquierdo.addEventListener('mousedown', function(e) {
    var startX = e.clientX;
    var startWidth = parseInt(document.defaultView.getComputedStyle(panelIzquierdo).width, 10);

    function doDrag(e) {
        panelIzquierdo.style.width = (startWidth + e.clientX - startX) + 'px';
    }

    function stopDrag() {
        document.removeEventListener('mousemove', doDrag, true);
        document.removeEventListener('mouseup', stopDrag, true);
    }

    document.addEventListener('mousemove', doDrag, true);
    document.addEventListener('mouseup', stopDrag, true);
});