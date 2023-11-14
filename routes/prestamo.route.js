import cf from "../middleware/filtros.js";
import Prestamo from "../models/prestamo.js";
import TipoPrestamo from "../models/tipo_prestamo.js";

function prestamo(app) {

  app.get('/prestamos/:id_tipo_prestamo/:id_programa/:id_municipalidad/:id_usuario', async (req, res) => {
    try {
      let params = cf(req.params);
      let prestamos = await Prestamo.findAll({
        where: params,
        include: [
          {
            model: TipoPrestamo, as: 'tipo_prestamo'
          }
        ]
      });
      res.status(200).json({ resultado: true, data: prestamos });
    } catch (err) {
      res.status(200).json({ resultado: false, mensaje: err });
    }
  });

} export default prestamo;