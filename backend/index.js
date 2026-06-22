const express = require('express');
const app = express();
const port = 3501;


const datos = {
    mensaje: "Hola desde el backend",
    status: "ok",
    items: ["uno", "dos", "tres"]
};

app.get('/data', (req, res) => {
    res.json(datos);
});

app.listen(port, () => {
    console.log(`Backend escuchando en http://localhost:${port}`);
});
