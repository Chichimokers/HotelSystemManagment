
const {Router, request} = require('express');

const { default: Database, DBGlobalInstance, db } = require('../../database/config');
const { CrudModel } = require('../../database/crudmodel');
const { valiADMIN } = require('../../middlewares/validar-GERENT');
const { valiJWT } = require('../../middlewares/validar-JWT');
const { validation } = require('../../middlewares/validation');

const router = Router();
const CrudRoutes = (routename, databaseQueryHandler = CrudModel.prototype,middlewares=Array) => {

  console.log(middlewares)
    router.get(`/${routename}`,middlewares, async (req, res) => {
      try {
        const items = await databaseQueryHandler.GetAll();
        res.json(items);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  

    router.get(`/${routename}/:id`,middlewares, async (req, res) => {
      try {
        const item = await databaseQueryHandler.FindById(req.params.id);
        if (!item) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    router.post(`/${routename}`,middlewares, async (req = request, res) => {
      try {
    
        const newItem = await databaseQueryHandler.Add(Object.values(req.body),Object.keys(req.body));
        res.status(201).json(newItem);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });
  
    router.patch(`/${routename}/:id`,middlewares, async (req, res) => {
      try {
        const updatedItem = await databaseQueryHandler.UpdateField(req.params.id, req.body.updatefield,req.body.value);
        
        if (!updatedItem) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json(updatedItem);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });
  

    router.delete(`/${routename}/:id`,middlewares, async (req, res) => {
      try {
        const deletedItem = await databaseQueryHandler.Delete(req.params.id);
        if (!deletedItem) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  };
  
function Rutas()  { 

CrudRoutes("habitaciones",db.HabitacionesQuery(),[valiADMIN])

CrudRoutes("gerente",db.GerenteQuery(),[valiADMIN])

CrudRoutes("empledos",db.EmployQuery(),[valiADMIN])

CrudRoutes("reservas",db.ReservasQuery(),[valiADMIN])

CrudRoutes("user",db.UserQuery(),[valiADMIN])

return router    
}
    
   module.exports = Rutas;
   

   