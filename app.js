
const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12629011',
  password: 'RzlzHmeUy8',
  database: 'sql12629011',
  port : 3306
});


// Route to handle the form submission





app.post('/changepass',(req,res)=>{
  const {phno,pass} = req.body;
  pool.query(`SELECT * FROM \`User\` WHERE phone_number = '${phno}' `, (error, results) => {
    if (error) {
        console.error('Error retrieving data from database:', error);
    } else {
        if(results[0]){
          // res.send(results[0]. name)
          pool.query(`UPDATE \`User\` SET password = '${pass}' WHERE id = ${results[0].id};`,(error, results) =>{
            if(error){
              console.error("some error occured",error)
            }
            else{
              res.send("Password Updated")
            }
          })
        }
        else{
          res.send("Incorrect")
        }
    }
  });

})



app.post('/userdetails',(req,res)=>{
  pool.query(`SELECT * FROM \`User\` WHERE id = 29 `, (error, results) => {
    if (error) {
        console.error('Error retrieving data from database:', error);
    } else {
        if(results[0]){
          res.send(results)
        }
        else{
          res.send("Incorrect")
        }
    }
  });

})



app.post('/insertData', (req, res) => {
  const { orderDate,company,product,count,weight,request,productid} = req.body;
  console.log(orderDate,company,product,count,weight,request,productid)


  // Insert the data into the MySQL database
  pool.query(`INSERT INTO OrderItem
  ( orderListId,productId,package,request_weight,result_weight,orderDate,price,order_id,count,requests,user_id,create_time) VALUES (NULL,${productid},'${product}',${weight},NULL,'${orderDate}',NULL,1301,${count},'${request}',
  ${company},NOW()) ;`, [orderDate,company,product,count,weight,request], (error, results) => {
    if (error) {
      console.error('Error in Inserting data into database:', error);
    } else {
      res.send('Data Inserted Successully')
  }
  });
});


app.get('/table', (req, res) => {
  pool.query('SELECT id,productId,package,request_weight,orderDate,order_id,count,requests,user_id,create_time FROM OrderItem WHERE user_id=29',(error, results)=>{
      if (error) throw error;
      res.send(results);
  });
  
});


// Start the Express.js server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
