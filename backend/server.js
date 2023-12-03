const express = require('express')
const cors = require('cors')
// const mysql = require('mysql2')

const violationsRoute = require('./routes/violations')

const { formatDate } = require('./dateFormat.js')

const app = express()

const port = 3000
app.use(cors())

// const mainDB = 'anecdotalDB' 
// const testDB = 'test'
// //connect to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: mainDB
// })


let studentDatas = []

// connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to the database:', err);
//       return;
//     }
//     console.log('Connected to the database');
    
  
    
//     const query = 'SELECT * FROM students';
//     const testQ = ` SELECT v.ViolationDate, v.ViolationDescription
//                     FROM students s
//                     JOIN violations v ON s.StudentID = v.StudentID
//                     WHERE s.StudentName = 'xander'; ` 
  
//     // connection.query(query, (err, results) => {
//     //     if (err) {
//     //         console.error('Error executing query:', err);
//     //         return;
//     //     }
//     //     // console.log(results);
//     //     // console.log(formatDate(results)); 
//     //     //remove the time from date
//     //     studentDatas = results
        
        
//     //     //Close the database connection when finished
//     //     connection.end((err) => {
//     //         if (err) {
//     //             console.error('Error closing the database connection:', err);
//     //         } else {
//     //             console.log('Database connection closed');
//     //         }
//     //     });

//     // });

// });

//send the students name adn section data
app.get('/students', (req,res) => res.send(studentDatas) )



app.use('/violations', violationsRoute)

 

app.listen(port, () => console.log(`connected to port ${port}`))