// llamando las dependencias
const express = require('express')
const cors = require('cors')
const app = express()  

// Usando la libreria CORS
app.use(cors())

// Endpoint para obtener la API donde se invierte el texto ejemplo http://host/texto
app.get('/:text', (req, res) => {
    const texto = req.params.text // Recibiendo el texto que viene por url
    res.json({"text": texto.split("").reverse().join("")}) // Enviando el texto invertido en formato JSON
})

// Declarando el Puerto de escucha
const PORT = process.env.PORT || 3001 
app.listen(PORT, () => {
    console.log(`Servidor corriendo por el puerto ${PORT}`);
})