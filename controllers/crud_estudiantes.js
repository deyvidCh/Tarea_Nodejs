import { conectar } from "../models/db_conectar.js";

var crud_estudiante = ({});

crud_estudiante.leer = (req, res) => {
    conectar.query(`
        select e.*, ts.nombre as tipo_sangre
        from estudiantes e
        join tipos_sangre ts on e.id_tipo_sangre = ts.id_tipo_sangre;
    `, (error, resultsEstudiantes) => {
        if (error) {
            throw error;
        } else {
            conectar.query('select id_tipo_sangre, nombre from tipos_sangre;', (error, resultsTiposSangre) => {
                if (error) {
                    throw error;
                } else {
                    res.render('estudiantes/index', {
                        resultado: resultsEstudiantes, 
                        tiposDeSangre: resultsTiposSangre 
                    });
                }
            });
        }
    });
};

crud_estudiante.cud = (req, res) => {
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const carne = req.body.txt_carne;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const correo_electronico = req.body.txt_correo_electronico;
    const id_tipo_sangre = req.body.txt_id_tipo_sangre;
    const fecha_nacimiento = req.body.txt_fn;

    if (!id_tipo_sangre || isNaN(id_tipo_sangre)) {
        return res.status(400).send("Por favor selecciona un tipo de sangre válido.");
    }

    if (btn_crear) {
        conectar.query('insert into estudiantes SET ?',{carne:carne,nombres:nombres, apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,id_tipo_sangre:id_tipo_sangre,fecha_nacimiento:fecha_nacimiento}, (error, results)=>{
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });
    }

    if (btn_actualizar) {
        conectar.query('update estudiantes SET ? where carne=?',[{carne:carne,nombres:nombres, apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,id_tipo_sangre:id_tipo_sangre,fecha_nacimiento:fecha_nacimiento},carne], (error, results)=>{
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });
    }

    if (btn_borrar) {
        conectar.query('delete from estudiantes WHERE carne=?', [carne], (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).send('Error al eliminar el estudiante');
            } else {
                conectar.query('ALTER TABLE estudiantes AUTO_INCREMENT = 1', (error, results) => {
                    if (error) {
                        console.log(error);
                        res.status(500).send('Error al resetear el AUTO_INCREMENT');
                    } else {
                        res.redirect('/');
                    }
                });
            }
        });
    }
};

export { crud_estudiante };
