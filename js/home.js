$(document).ready(function () {
 
  // Función para animar el contenido del hero (pantalla principal)
  function animateHero() {
    $('#hero .hero-content h1').hide().fadeIn(1000);  
    $('#hero .hero-content p').hide().slideDown(2000);  
  }


  // Ejecuta la animación cada 5 segundos
  setInterval(animateHero, 5000);


  // Interacción hover sobre las tarjetas de la sección home
  $('#seccion-cards-home .card-zenfit').hover(
    // Acción al pasar el ratón sobre la tarjeta
    function () {
      $(this) 
        .stop(true) 
        .animate({ top: '-10px' }, 300) 
        .css({
          backgroundColor: '#dc3545', 
          color: '#fff' 
        });
        // Cambia el color de los iconos y el texto dentro de la tarjeta
      $(this).find('.icon, .card-text').css('color', '#fff');
    },

    // Acción cuando el ratón sale de la tarjeta
    function () {
      $(this) // Se refiere a la tarjeta que activó el hover
        .stop(true) // Detiene cualquier animación en curso
        .animate({ top: '0' }, 300) // Devuelve la tarjeta a su posición original durante 300ms
        .css({
          backgroundColor: '', // Restaura el color de fondo a su valor original
          color: '' // Restaura el color del texto a su valor original
        });

         // Restaura el color de los iconos y el texto dentro de la tarjeta a su estado origin
      $(this).find('.icon, .card-text').css('color', '');
    }
  );


  // Función para mostrar el contador de socios de Zenfit con un bucle
  (function contadorSociosZenfitLoop() {
    let numeroFinal = 500; 
    let duracion = 2000; 
    let incremento = 1;  

      // Función que inicia el contador
    function iniciarContadorZenfit() {
      let actual = 0; // Inicia el contador en 0
      let intervalo = Math.floor(duracion / (numeroFinal / incremento)); // Calcula el intervalo de tiempo entre cada incremento

      //intervalo para actualizar el contador
      let contador = setInterval(function () {
        actual += incremento; // Incremento del contador
        $('#contador-socios-zenfit').text(actual); //valor actualizado en el elemento del contador

         // Si el contador alcanza el número final
        if (actual >= numeroFinal) {
          clearInterval(contador); // Detiene el contador

          // Reiniciar
          setTimeout(iniciarContadorZenfit, 2000);
        }
      }, intervalo); 
    }

 
    iniciarContadorZenfit();
  })();


});

