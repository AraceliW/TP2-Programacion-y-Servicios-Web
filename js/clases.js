$(document).ready(function () {

  //filtros de las cards
  $('.filter-btn').on('click', function () {
    const filter = $(this).data('filter');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.clase-card').show();
    } else {
      $('.clase-card').hide();
      $('.clase-card[data-clase="' + filter + '"]').fadeIn();
    }
  });

  //overlays de las cards
  $('.card-overlay').css('visibility', 'hidden').css('opacity', 0);

  // Manejo del hover
  $('.card-zoom').hover(
    function () {
      // Mostrar overlay
      $(this).find('.card-overlay').stop().fadeTo(300, 1).css('visibility', 'visible');
      // Zoom en la card
      $(this).css('transform', 'scale(1.05)');
    },
    function () {
      // Ocultar overlay
      $(this).find('.card-overlay').stop().fadeTo(300, 0).css('visibility', 'hidden');
      // Zoom fuera
      $(this).css('transform', 'scale(1)');
    }
  );

});

