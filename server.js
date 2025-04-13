const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const multer =require('multer')
const sharp = require('sharp')
const path = require('path')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Ruta para manejar la creación de usuario
app.post('/saveUser', (req, res) => {
    const user = req.body;

    console.log("Recibido usuario:", user);  // Log para ver qué usuario está llegando

    // Leer el archivo JSON existente
    fs.readFile('./Assets/Data/users.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);  // Log de error de lectura
            return res.status(500).json({ success: false, message: 'Error al leer el archivo' });
        }

        // Parsear el archivo JSON
        let users;
        try {
            users = JSON.parse(data);
        } catch (parseError) {
            console.error("Error al parsear JSON:", parseError);  // Log para errores al parsear JSON
            return res.status(500).json({ success: false, message: 'Error al parsear los usuarios' });
        }

        // Agregar el nuevo usuario
        users.push(user);

        // Guardar los usuarios actualizados en el archivo JSON
        fs.writeFile('./Assets/Data/users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error("Error al escribir el archivo:", err);  // Log de error de escritura
                return res.status(500).json({ success: false, message: 'Error al guardar el usuario' });
            }
            console.log("Usuario guardado con éxito");  // Log cuando todo sale bien
            res.status(200).json({ success: true, message: 'Usuario guardado con éxito' });
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
