 const express = require('express');
 const path = require('path');
 const fileupload = require('express-fileupload');

 //let initial_path = path.join(__dirname, "public");

 const app = express();
 app.use(express.static(__dirname));
 app.use(fileupload());

 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
 })

 app.get('/editor', (req, res) => {
   res.sendFile(path.join(__dirname, "editor.html"));
 })

 // upload link
 app.post('/upload', (req, res) => {
   let file = req.files.image;
   let date = new Date();
   //image name
   let imagename = date.getDate() + date.getTime() + file.name;
   //image upload path
   let path = 'workon/uploads/' + imagename;

   //create upload
   file.mv(path, (err, result) => {
      if(err){
         throw err;
      } else{
         //image upload path
         res.json('uploads/${imagename}')
      }

   })
 })

 app.listen(8080, () => {
    console.log('listening on port 8080');
 })