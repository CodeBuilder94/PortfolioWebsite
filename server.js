const express = require('express');
const app = express();
const path = require('path');


app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));
app.use("/Static", express.static(path.join(__dirname, "/Static")));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'Static/index.html')));
app.use("/src/images", express.static(path.join(__dirname,"/src/images")));
app.get('/', (req,res)=> res.sendFile(path.join(__dirname,"/src/images")));

const port = process.env.PORT || 3000;


app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});