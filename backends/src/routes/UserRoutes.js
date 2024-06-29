
const {Router, request} = require('express');

const { default: Database, DBGlobalInstance, db } = require('../../database/config');
const { CrudModel } = require('../../database/crudmodel');
const { valiJWT } = require('../../middlewares/validar-JWT');
const { validation } = require('../../middlewares/validation');
const {extractPayload} = require('../../helpers/tokengenerator')
const router = Router();
  
function Rutas()  { 

router.get(`/getreservas`, async (req, res) => {
    try {

      const token = req.header("Authorizathion");
    
      const id = await extractPayload(token)
   
      const items = await  db.ReservasQuery().FilterByField("id_cliente",id);

      res.json(items);

    } catch (error) {

      res.status(500).json({ message: error.message });

    }

});

router.get(`/gethabitaciones`, async (req, res) => {
        try {
          const items = await  db.HabitacionesQuery().GetAll();
          res.json(items);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    });
    
router.get(`/gethabitaciones/:id`, async (req, res) => {
  try {
    const item = await db.HabitacionesQuery().FindById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    });

    
router.post(`/reservar`,[valiJWT], async (req, res) => {
  try {
    const{fecha_entrada,fecha_salida,numero_huespedes,id_cliente,preciototal,cantdiasestadia,id_habitacion } = req.body;

    const items = await  db.ReservasQuery().Add(
      [fecha_entrada,fecha_salida,numero_huespedes,id_cliente,preciototal,cantdiasestadia,id_habitacion],
      [
      "fecha_entrada",
      "fecha_salida",
      "numero_huspedes",
      "id_cliente",
      "preciototal",
      "cantdiasestadia",
      "id_habitacion"]);
    const haitciontrue = await db.HabitacionesQuery().UpdateField(id_habitacion,"reservada","true")
    
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
  

return router    
}
    
   module.exports = Rutas;
   

   