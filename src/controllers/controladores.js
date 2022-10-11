import { connect } from '../database';

const formatYmd = (date) =>
	date.toISOString().slice(0, 10);
//USUARIOS

export const getUsers = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.execute(
		'SELECT * FROM usuarios'
	);
	res.json(rows);
};

export const createUser = async (req, res) => {
	try {
		const connection = await connect();
		const [rows] = await connection.execute(
			'INSERT INTO usuarios (nombre, email, estado, fecha_creacion, fecha_actualizacion) VALUES (?,?,?,?,?)',
			[
				req.body.nombre,
				req.body.email,
				1,
				formatYmd(new Date()),
				formatYmd(new Date()),
			]
		);
		res.json(rows);
	} catch (error) {
		console.log(error);
	}
};

export const updateUser = async (req, res) => {
	try {
		const connection = await connect();
		await connection.query(
			'UPDATE usuarios SET nombre = ?, email = ?, estado = ?, fecha_actualizacion = ? WHERE id_usuarios = ?',
			[
				req.body.nombre,
				req.body.email,
				req.body.estado,
				formatYmd(new Date()),
				parseInt(req.params.id),
			]
		);
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
	}
};

export const deleteUser = async (req, res) => {
	try {
		const connection = await connect();
		await connection.query(
			'DELETE FROM usuarios  WHERE id_usuarios = ?',
			[parseInt(req.params.id)]
		);
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
	}
};

//ESTADO EQUIPO

export const getEstadoEquipo = async (
	req,
	res
) => {
	const connection = await connect();
	const [rows] = await connection.execute(
		'SELECT * FROM estado_equipo'
	);
	res.json(rows);
};

export const createEstadoEquipo = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		console.log(req.body);
		const [rows] = await connection.execute(
			'INSERT INTO estado_equipo (nombre, estado, fecha_creacion, fecha_actualizacion) VALUES (?,?,?,?)',
			[
				req.body.nombre,
				1,
				formatYmd(new Date()),
				formatYmd(new Date()),
			]
		);
		res.json(rows);
	} catch (error) {
		console.log(error);
	}
};

export const updateEstadoEquipo = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		await connection.query(
			'UPDATE estado_equipo SET nombre = ?, estado = ?, fecha_actualizacion = ? WHERE idestado_equipo = ?',
			[
				req.body.nombre,
				req.body.estado,
				formatYmd(new Date()),
				parseInt(req.params.id),
			]
		);
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
	}
};

export const deleteEstadoEquipo = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		await connection.query(
			'DELETE FROM estado_equipo  WHERE idestado_equipo = ?',
			[parseInt(req.params.id)]
		);
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
	}
};

//MARCAS

export const getMarcas = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.execute(
		'SELECT * FROM marcas'
	);
	res.json(rows);
};

export const createMarcas = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		const [rows] = await connection.execute(
			'INSERT INTO marcas (nombre, estado, fecha_creacion, fecha_actualizacion) VALUES (?,?,?,?)',
			[
				req.body.nombre,
				1,
				formatYmd(new Date()),
				formatYmd(new Date()),
			]
		);
		res.json(rows);
	} catch (error) {
		console.log(error);
	}
};

export const updateMarcas = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		await connection.query(
			'UPDATE marcas SET nombre = ?, estado = ?, fecha_actualizacion = ? WHERE id_marcas = ?',
			[
				req.body.nombre,
				req.body.estado,
				formatYmd(new Date()),
				parseInt(req.params.id),
			]
		);
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
	}
};

export const deleteMarca = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		await connection.query(
			'DELETE FROM marcas  WHERE id_marcas = ?',
			[parseInt(req.params.id)]
		);
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
	}
};

//TIPO EQUIPO

export const getTipoEquipo = async (
	req,
	res
) => {
	const connection = await connect();
	const [rows] = await connection.execute(
		'SELECT * FROM tipo_equipo'
	);
	res.json(rows);
};

export const createTipoEquipo = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		const [rows] = await connection.execute(
			'INSERT INTO tipo_equipo (nombre, estado, fecha_creacion, fecha_actualizacion) VALUES (?,?,?,?)',
			[
				req.body.nombre,
				req.body.estado,
				formatYmd(new Date()),
				formatYmd(new Date()),
			]
		);
		res.json(rows);
	} catch (error) {
		console.log(error);
	}
};

export const updateTipoEquipo = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		await connection.query(
			'UPDATE tipo_equipo SET nombre = ?, estado = ?, fecha_actualizacion = ? WHERE idtipo_equipo = ?',
			[
				req.body.nombre,
				req.body.estado,
				formatYmd(new Date()),
				parseInt(req.params.id),
			]
		);
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
	}
};

export const deleteTipoEquipo = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		await connection.query(
			'DELETE FROM tipo_equipo  WHERE idtipo_equipo = ?',
			[parseInt(req.params.id)]
		);
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
	}
};

export const getInventarios = async (
	req,
	res
) => {
	const connection = await connect();
	const [rows] = await connection.execute(
		'SELECT * FROM inventarios'
	);
	res.json(rows);
};

export const createInventario = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		const [rows] = await connection.execute(
			'INSERT INTO inventarios (precio, estado, marca, fechaCompra, usuario ) VALUES (?,?,?,?,?)',
			[
				parseInt(req.body.precio),
				parseInt(req.body.estado),
				parseInt(req.body.marca),
				req.body.fechaCompra,
				parseInt(req.body.usuario),
				// 22, 10, 7, 20221004, 6,
			]
		);
		res.json(rows);
	} catch (error) {
		console.log(error);
	}
};

export const updateInventario = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		await connection.query(
			'UPDATE inventarios SET precio = ?, estado = ?, marca = ?, fechaCompra = ? usuario = ? WHERE serial = ?',
			[
				parseInt(req.body.precio),
				parseInt(req.body.estado),
				parseInt(req.body.marca),
				req.body.fechaCompra,
				parseInt(req.body.usuario),
				parseInt(req.params.id),
			]
		);
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
	}
};

export const deleteInventario = async (
	req,
	res
) => {
	try {
		const connection = await connect();
		await connection.query(
			'DELETE FROM inventarios  WHERE serial = ?',
			[parseInt(req.params.id)]
		);
		res.sendStatus(204);
	} catch (error) {
		console.log(error);
	}
};
