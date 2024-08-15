const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));



const sqlite3=require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
        if (err) return console.error(err.message);});
        /*
        sql = `CREATE TABLE dataGame (id INTEGER PRIMARY KEY, slot1,slot2)`;
        db.run(sql); 
        */


        /*
        sql = `INSERT INTO dataGame (slot1,slot2) VALUES(?,?)`;
        db.run(sql,
                [23, 333],
                (err) => {
                if (err) return console.error(err.message);
                 }
                ); 
        */

        /*
                sql = `UPDATE dataGame SET slot1 = ? WHERE id = ?`;
                db.run(sql, ["Jake", 1], (err) => {
                  if (err) return console.error(err.message);
                });
          */
         /*
                sql = `DELETE FROM dataGame WHERE id = ?`;
                db.run(sql, [2], (err) => {
                if (err) return console.error(err.message);
                });
               
*/

        sql = `SELECT * FROM dataGame`; 
        db.all(sql, [], (err, rows) => {
                if (err) return console.error(err.message);
                rows.forEach((row) => {
                  console.table(row);
                });})
//rota home
app.get("/", function (req, res) {


                  res.render("home/index", {
          
          
                  })
          });

app.listen(process.env.PORT || 1011, function (erro) {

                  erro ?
                          console.log("opa aconteceu um erro!") :
                          console.table(["oba servidor rodando!", "localhost:1011"]);
                          
          
          });
          