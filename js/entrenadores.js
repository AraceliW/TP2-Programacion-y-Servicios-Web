$(document).ready(function () {

  //Barras de progreso animadas
    function animateProgressBars() {
      $('.progress-bar').each(function () {
        var $bar = $(this);
        var value = $bar.data('value');
    
        // Reiniciar la barra antes de volver a animar
        $bar.stop().css('width', '0%');
    
        setTimeout(function () {
          $bar.animate({ width: value + '%' }, 1000);
        }, 100);
      });
    }
    
    animateProgressBars();
    //interval para repetir la animacion cada 3 segundos
    setInterval(animateProgressBars, 3000);
   
    
    //sistema de rating de estrellas
    $(function () {
      // Para cada card individual
      $('.star-rating').each(function () {
        const $stars = $(this).find('.star'); //selector de estrellas
    
        // Hover de estrellas
        $stars.on('mouseenter', function () {
          const index = $stars.index(this);
          $stars.removeClass('hovered');
          $stars.slice(0, index + 1).addClass('hovered');
        }).on('mouseleave', function () {
          $stars.removeClass('hovered');
        });
    
        // Click para seleccionar la estrella
        $stars.on('click', function () {
          const index = $stars.index(this);
          const rating = index + 1;
    
          // Limpiar y aplicar la selección
          $stars.removeClass('selected');
          $stars.slice(0, rating).addClass('selected');
    
          // Mostrar el valor de esta tarjeta
          const $ratingValue = $(this).closest('.card').find('.rating-value');
          $ratingValue.text(`Calificación: ${rating} estrellas`);
    
          setTimeout(function() {
            $stars.removeClass('selected');
            $ratingValue.text(''); 
          }, 2000); 
        });
      });
    });
    
    
   
});

