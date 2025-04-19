$(document).ready(function () {
    let timeout;

    // Inicializa el header en todas las páginas
    $('.nav-item.dropdown').hover(
        function () {
            clearTimeout(timeout); 
            $(this).addClass('show');
            $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
            $(this).find('.dropdown-menu').addClass('show');
        },
        function () {
            //Delay para que no se cierre instantáneamente
            const $this = $(this);
            timeout = setTimeout(function () {
                $this.removeClass('show');
                $this.find('.dropdown-toggle').attr('aria-expanded', 'false');
                $this.find('.dropdown-menu').removeClass('show');
            }, 300); //Esperar X-ms antes de cerrar el menú desplegable
        }
    );

    //Funcion de validacion de formulario del footer de todas las páginas
    $('#form-footer-contacto').on('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        const form = this;

        if (form.checkValidity()) {
            $('#spinner-footer').removeClass('d-none');

            setTimeout(() => {
                $('#spinner-footer').addClass('d-none');
                const modal = new bootstrap.Modal(document.getElementById('modalFooter'));
                modal.show();
                form.reset();
                form.classList.remove('was-validated');
            }, 2000);
        }

        form.classList.add('was-validated');
    });

});