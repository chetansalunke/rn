const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'abc54321',
        database:'api'
    }
);

// const getAllCategory = (req, res) => {

//     connection.execute('select * from api.product',(err,result,fields)=>{
//       if(err)
//       {
//         res.status(500).send({message:"Error while fatching category"},err);
//         console.log(err.message);
//         return;
//       }

//       res.send(result);

//     })

//   };

connection.execute(
    'select * from api.register_user',
    (err,res,fields)=>{
        console.log(res);
    }
);

module.exports = connection;
