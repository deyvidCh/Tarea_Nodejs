import mysql from 'mysql' // o tambien const mysql = require('mysql');
	var conectar = mysql.createConnection({
    		host     : 'localhost',
    		user     : 'root',
    		password : 'Umg-2024',
    		database : 'db_empresa'
  	});

  	conectar.connect(function(err) {
    		if (err) {
      			console.error('Error en la conexion: ' + err.stack);
      	return;
    	}
   
    			console.log('conexion exitosa ID: ' + conectar.threadId);
  	});

  	export {conectar}