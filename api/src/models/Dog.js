const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Dog',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			image: {
				type: DataTypes.STRING,
			},
			name: {
				type: DataTypes.STRING,
			},
			height: {
				type: DataTypes.STRING,
			},
			weight: {
				type: DataTypes.STRING,
			},
			life_span: {
				type: DataTypes.STRING,
			},
			temperament: {
				type: DataTypes.STRING,
			},
		},
		{ timestamps: false }
	);
};
