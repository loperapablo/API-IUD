import { Router } from 'express';
import {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
	getEstadoEquipo,
	createEstadoEquipo,
	updateEstadoEquipo,
	deleteEstadoEquipo,
	getMarcas,
	createMarcas,
	updateMarcas,
	deleteMarca,
	getTipoEquipo,
	createTipoEquipo,
	updateTipoEquipo,
	deleteTipoEquipo,
	getInventarios,
	createInventario,
	updateInventario,
	deleteInventario,
} from '../controllers/controladores';

const router = Router();

router.get('/usuarios', getUsers);
router.post('/usuarionuevo', createUser);
router.put('/usuario/:id', updateUser);
router.delete('/usuario/:id', deleteUser);
router.get('/estados', getEstadoEquipo);
router.post(
	'/estadoequiponuevo',
	createEstadoEquipo
);
router.put(
	'/estadoequipo/:id',
	updateEstadoEquipo
);
router.delete(
	'/estados/:id',
	deleteEstadoEquipo
);
router.get('/marcas', getMarcas);
router.post('/marcanueva', createMarcas);
router.put('/marca/:id', updateMarcas);
router.delete('/marca/:id', deleteMarca);
router.get('/tipoequipo', getTipoEquipo);
router.post(
	'/tipoequiponuevo',
	createTipoEquipo
);
router.put(
	'/tipoequipo/:id',
	updateTipoEquipo
);
router.delete(
	'/tipoequipo/:id',
	deleteTipoEquipo
);

router.get('/inventarios', getInventarios);
router.post(
	'/inventarionuevo',
	createInventario
);
router.put(
	'/inventario/:id',
	updateInventario
);
router.delete(
	'/inventario/:id',
	deleteInventario
);

export default router;
