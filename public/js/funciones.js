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

document.addEventListener('DOMContentLoaded', function () {
    const tablaEstudiantes = document.getElementById('tabla-estudiantes');
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    const botonNuevo = document.querySelector('button[data-bs-target="#exampleModal"]'); 
    function limpiarCampos() {
        document.getElementById('txt_id').value = '';
        document.getElementById('txt_carne').value = '';
        document.getElementById('txt_nombres').value = '';
        document.getElementById('txt_apellidos').value = '';
        document.getElementById('txt_direccion').value = '';
        document.getElementById('txt_telefono').value = '';
        document.getElementById('txt_correo_electronico').value = '';
        document.getElementById('txt_id_tipo_sangre').value = '';
        document.getElementById('txt_fn').value = '';
    }

    if (botonNuevo) {
        botonNuevo.addEventListener('click', function () {
            limpiarCampos(); 
        });
    }

    if (tablaEstudiantes) {
        tablaEstudiantes.addEventListener('click', function (event) {
            const row = event.target.closest('tr');
            if (row) {
                const id = row.getAttribute('data-id');
                const carne = row.getAttribute('data-carne');
                const nombres = row.getAttribute('data-nombres');
                const apellidos = row.getAttribute('data-apellidos');
                const direccion = row.getAttribute('data-direccion');
                const telefono = row.getAttribute('data-telefono');
                const correo = row.getAttribute('data-correo');
                const sangre = row.getAttribute('data-sangre');
                const nacimiento = row.getAttribute('data-nacimiento');
                document.getElementById('txt_id').value = id;
                document.getElementById('txt_carne').value = carne;
                document.getElementById('txt_nombres').value = nombres;
                document.getElementById('txt_apellidos').value = apellidos;
                document.getElementById('txt_direccion').value = direccion;
                document.getElementById('txt_telefono').value = telefono;
                document.getElementById('txt_correo_electronico').value = correo;
                document.getElementById('txt_id_tipo_sangre').value = sangre;
                document.getElementById('txt_fn').value = nacimiento;
                modal.show();
            }
        });
    }
});

