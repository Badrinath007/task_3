 const express = require('express');
 const path = require('path');

 //let initial_path = path.join(__dirname, "public");

 const app = express();
 app.use(express.static(__dirname));

 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
 })

 app.get('/editor', (req, res) => {
   res.sendfile(path.join(__dirname, "editor.html"));
 })

 app.listen(8080, () => {
    console.log('listening on port 8080');
 })