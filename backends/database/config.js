const { default: User } = require("../src/class/User");
const pg = require("pg");
const { config } = require("dotenv");
const { json } = require("express");
const { Int32 } = require("mongodb");
const { CrudModel } = require("./crudmodel");

require("dotenv").config();


class Database
{
    constructor() {
        this.databaseconnection = new  pg.Pool({
            host:  process.env.PGSERVER,
            user: process.env.PGUSER,
             port: 3306,
           /* port: 5432,*/
            password: process.env.PGPASSWORD,
            database: process.env.DATABASE
        })

      
        console.log("Se conecto a la bd "+this.databaseconnection.totalCount)


       
    }
   
    UserQuery = () => {

      return new CrudModel(
        "users",
        this.databaseconnection
        );

    };
    GerenteQuery   = () => {
      return new CrudModel(
        "gerente",
        this.databaseconnection
        );

    };
    EmployQuery  = () => {

      return new CrudModel(
        "empledos",
        this.databaseconnection
        );

    };
    ReservasQuery  = () => {

      return new CrudModel(
        "reservas",
        this.databaseconnection
        );

    };
     ReprotesQuery   = () => {

      return new CrudModel(
        "reportes",

        this.databaseconnection
        );

    };
    HabitacionesQuery   = () => {

      return new CrudModel(
        "habitaciones",
        this.databaseconnection
        );

    };

}
const db = new Database();
module.exports = { db,Database}