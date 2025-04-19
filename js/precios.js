$(document).ready(function () {
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

    // Toggle para cambiar entre precios mensuales y anuales
    $('#toggle-precio').on('change', function () {
        const anual = $(this).is(':checked');
        $('.precio').each(function () {
            const nuevo = anual ? $(this).data('anual') : $(this).data('mensual');
            $(this).text(`$${nuevo}`);
        });
    });

    // Resaltar fila y columna al pasar el mouse
    $('table').on('mouseenter', 'td', function () {
        const index = $(this).index();
        const $row = $(this).parent();

        // Remover anteriores
        $('td, th').removeClass('highlight');

        // Resaltar columna
        $('tr').each(function () {
            $(this).children().eq(index).addClass('highlight');
        });

        // Resaltar fila
        $row.children().addClass('highlight');
    });

    // Quitar resaltado al salir
    $('table').on('mouseleave', function () {
        $('td, th').removeClass('highlight');
    });

});