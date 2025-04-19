$(document).ready(function () {

    // Filtrado de artículos
    $('.filter-btn').on('click', function () {
        const filter = $(this).data('filter');

        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        if (filter === 'all') {
            $('.blog-article').show();
        } else {
            $('.blog-article').each(function () {
                const categories = $(this).data('category').split(' '); // Separar categorías
                if (categories.includes(filter)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });



    //Comentarios destacados
    $('.highlight-btn').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.comment').toggleClass('highlighted');
    });


    //Sistema de respuestas a comentarios
    let comentarioSeleccionado;
    //responder a un comentario
    $('.responder-btn').on('click', function () {
        comentarioSeleccionado = $(this).closest('.comentario');
        const usuario = $(this).data('user');
        $('#usuarioResponder').text(usuario);
        $('#textoRespuesta').val('');
        $('#modalResponder').modal('show');
    });
    //enviar respuesta
    $('#enviarRespuesta').on('click', function () {
        const respuesta = $('#textoRespuesta').val().trim();
        if (respuesta !== '') {
            const nuevoComentario = `
      <div class="respuesta mt-2">
        <strong class="text-danger">Vos</strong>
        <p class="mb-1">${respuesta}</p>
      </div>
    `;
            comentarioSeleccionado.find('.respuestas').append(nuevoComentario);
            $('#modalResponder').modal('hide');
        }
    });


    // Animaccion de desplazamiento de la secciones comentarios y articulos
    AOS.init({
        offset: 120,
        duration: 1000,
        easing: 'ease-in-out',
    });


});
