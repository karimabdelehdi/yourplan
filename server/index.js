const express = require('express');
const PORT = 3000;
const cors = require('cors')
const path = require('path');
const app = express(); 
const db =require('./db/index.js')
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors())
app.use(express.json()) 
app.get('/api/plans',(req,res)=>{
  db.query('SELECT * FROM plans', function(err,result){
   if(err){
   console.log(err)}
   res.send(result)
  })
}
)


app.post('/api/plans',(req,res)=>{
  const sql = `INSERT INTO plans (description) VALUES ("${req.body.description}")`
  db.query(sql,(err,result)=>{
    if (err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
})
app.delete('/plans/:ids',(req,res)=>{ 
  const sql = `DELETE FROM plans WHERE id=${req.params.ids}`
  db.query(sql,(err,result)=>{
    if (err){
      console.log(err)
    }else{
      res.send("no way you deleted me")
      console.log("no way you deleted me")
    }
  })
})
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});