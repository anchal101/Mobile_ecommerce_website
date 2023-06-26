import { Sequelize } from "sequelize";
require("pg").defaults.parseInt8 = true

class MyDatabase{
    db : string;
    user : string;
    password : string;
    host : string;
    port : number;
    maxPool : number;
    minPool : number;
    database : Sequelize

constructor(){
    this.db = 'mobile_ecommerce';
    this.user = "postgres";
    this.password = "admin@123";
    this.host = 'localhost';
    this.port = 5432;
    this.maxPool = 1000;
    this.minPool = 1;
    this.database = new Sequelize(this.db,this.user,this.password,{
        host : this.host,
        ssl : true,
        dialect : 'postgres',
        dialectOptions : {
            encrypt : true,
        },
        port : this.port,
        logging : false,
        pool : {
            max : this.maxPool,
            min : this.minPool,
            acquire : 100000,
            idle : 50000,
        },
    })
  }
}
let databaseInstance = new MyDatabase().database;
export default databaseInstance

