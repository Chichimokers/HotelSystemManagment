class CrudModel {
 
    constructor(tableName,databaseconnection) {

      this.tableName = tableName;

      this.databaseconnection = databaseconnection

      this.columns = []
    
    


    }
 
    async Columnas(){

      this.query = 'SELECT column_name FROM information_schema.columns WHERE table_name = \''+this.tableName+'\''
  
      const result = await this.databaseconnection.query(this.query, [])
      const sd = result.rows
      
      for (let index = 0; index < sd.length; index++) {
      
  
       this.columns.push(sd[index].column_name)
      }  
  
    }
    
    // Users CRUD
    async GetAll() {
      return new Promise((resolve, reject) => {
        const query = `SELECT * FROM public.${this.tableName}`;

        this.databaseconnection.query(query, [], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.rows);
          }
        });
      });
    }
  
    async Delete(id) {
      return new Promise((resolve, reject) => {
        const query = `DELETE FROM public.${this.tableName} WHERE id = $1`;
        this.databaseconnection.query(query, [id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        });
      });
    }
  
    async UpdateField(id, fieldToUpdate, newValue) {
      await this.Columnas()
      return new Promise((resolve, reject) => {

      

        const validFields = this.columns.map((column) => column.toLowerCase());
   
        console.log(this.columns)
        if (!validFields.includes(fieldToUpdate.toLowerCase())) {
          reject(new Error(`Invalid field to update: ${fieldToUpdate}`));
          return;

        }

        if(newValue == "NULL"){
          newValue = null
        }


        const query = `UPDATE public.${this.tableName} SET ${fieldToUpdate} = $1 WHERE id = $2`;
        this.databaseconnection.query(query, [newValue, id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        });
      });
    }
  
    async FilterByField(fieldName, value) {
      return new Promise(async (resolve, reject) => {

        const query = `SELECT * FROM public.${this.tableName} WHERE ${fieldName} ILIKE $1`;
      
        try {
          const result = await this.databaseconnection.query(query, [`%${value}%`]);
      
          resolve(result.rows);
        } catch (err) {
          reject(err);
        }
      });
    }
  
    async FindById(id) {
      return new Promise((resolve, reject) => {
        const query = `SELECT * FROM public.${this.tableName} WHERE id = $1`;
        this.databaseconnection.query(query, [id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.rows[0]);
          }
        });
      });
    }
  
    async Add(values,columns) {

      return new Promise((resolve, reject) => {
        
       
        const placeholders = columns.map((_, index) => `$${index + 1}`).join(', ');

        values = values.map(value => value === 'NULL' ? null : value);

        const query = `INSERT INTO public.${this.tableName} (${columns.join(', ')}) VALUES (${placeholders})`;

        this.databaseconnection.query(query, values, (err, result) => {
         
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        });
      });
    }
  }
  module.exports = {CrudModel}