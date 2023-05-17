function calcularTotal() {
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var categoria = document.getElementById('categoria').value;
    var precio = 200;
    var descuento = 1;

    if (categoria === 'estudiante') {
        descuento = 0.2;
    } else if (categoria === 'trainee') {
        descuento = 0.5;
    } else if (categoria === 'junior') {
        descuento = 0.85;
    }

    var total = cantidad * precio * descuento;
    document.getElementById('total').value = total.toFixed(2);
  }

  function borrarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('categoria').value = 'estudiante';
    document.getElementById('total').value = '';
     }