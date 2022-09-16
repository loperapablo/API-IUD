import { Router } from 'express';
import {
	getUsers,
	createUser,
	updateUser,
	getEstadoEquipo,
	createEstadoEquipo,
	updateEstadoEquipo,
	getMarcas,
	createMarcas,
	updateMarcas,
	getTipoEquipo,
	createTipoEquipo,
	updateTipoEquipo,
} from '../controllers/controladores';

const router = Router();

router.get('/usuarios', getUsers);
router.post('/usuarionuevo', createUser);
router.put('/usuario/:id', updateUser);
router.get('/estadoequipo', getEstadoEquipo);
router.post(
	'/estadoequiponuevo',
	createEstadoEquipo
);
router.put(
	'/estadoequipo/:id',
	updateEstadoEquipo
);
router.get('/marcas', getMarcas);
router.post('/marcanueva', createMarcas);
router.put('/marca/:id', updateMarcas);
router.get('/tipoequipo', getTipoEquipo);
router.post(
	'/tipoequiponuevo',
	createTipoEquipo
);
router.put(
	'/tipoequipo/:id',
	updateTipoEquipo
);

export default router;
