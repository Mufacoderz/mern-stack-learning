const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    database: 'login_db',
    user : 'root',
    password : ''
})

connection.connect(function(error){
    if(error)
    {
        throw error
    } else{
        console.log('mysql database is conncected succesfully')
    }
})

module.exports = connection