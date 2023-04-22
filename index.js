const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));



//rota home
app.get("/", function (req, res) {


                  res.render("home/index", {
          
          
                  })
          });

app.listen(process.env.PORT || 1011, function (erro) {

                  erro ?
                          console.log("opa aconteceu um erro!") :
                          console.log("oba servidor rodando!");
          
          });