import auth from "../middleware/auth.js";
import Prestamo from "../models/prestamo.js";

function prestamo(app) {

  app.get('/prestamos/:id_tipo_prestamo', auth, async (req, res) => {
    try {
      let params = req.params;
      let prestamos = await Prestamo.findAll({
        where: params
      });
      res.status(200).json({ resultado: true, data: prestamos });
    } catch (err) {
      res.status(200).json({ resultado: false, mensaje: err });
    }
  });

} export default prestamo;