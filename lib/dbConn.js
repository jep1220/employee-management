const mysql = require('mysql');

// Create Database Connection
const connection = mysql.createConnection({
    host: 'localhost',

    // DB port
    port: 3306,

    // Username
    user: 'root',

    // Password
    password: 'Hmniimykmfp2d92!',
    database: 'employees'
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;

});

module.exports = connection;