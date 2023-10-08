import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";



export const PostModel = sequelize.define('POST', {
    titulo: {
        type: DataTypes.STRING,
        allowNull:true
    },
    contenido: {
        type: DataTypes.STRING,
        allowNull:true
    },
    url: {
        type: DataTypes.STRING,
        allowNull:true
    }
}, {
    timestamps:true
})