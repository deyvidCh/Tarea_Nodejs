function confirmDelete() {
        var respuesta = confirm("¿Estas seguro que deseas eliminar al estudiante?")
        if (respuesta == true)
        {
            return true;
        }
        else
        {
            return false;
        }
}
document.getElementById('txt_carne').addEventListener('input', function () {
    this.setCustomValidity(''); 
    if (!this.validity.valid) {
        this.setCustomValidity('Debes coincidir con el formato solicitado, Ejemplo: E001');
    }
});

document.getElementById('txt_carne').addEventListener('blur', function () {
    this.reportValidity(); 
});