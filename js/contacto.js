$(document).ready(function () {

  //Control de validación del formulario
    $('#contactForm').on('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();
  
      const form = this;
    
      if (form.checkValidity()) {
        // Muestra el spinner
        $('#spinner').removeClass('d-none');
  
        
        setTimeout(function () {
          // Oculta el spinner
          $('#spinner').addClass('d-none');
  
        
          const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
          modal.show();
  
         
          form.reset();
          form.classList.remove('was-validated');
        }, 2000); 
      } else {
        form.classList.add('was-validated');
      }
    });

});