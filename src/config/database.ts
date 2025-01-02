
const database = require('knex')({
    client: 'mysql2',
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "my_portfolio",
    },
  });
function connect():void{
    console.log(database ? " kết nối được dữ liệu" : "không kết nối được dữ liệu");
}; 
export default { connect,  database};