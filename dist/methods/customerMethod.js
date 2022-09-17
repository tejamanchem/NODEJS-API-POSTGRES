"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = require("./../../database/dbConnection");
const connectionName = 'default';
const database = new dbConnection_1.Database();
const dbConn = await database.getConnection(connectionName);
const MspRepository = dbConn.getRepository('Users');
const getCustomer = async (req, res) => {
    let result = await MspRepository.createQueryBuilder('ur')
        .select([`cr.id,cr.firstname,cr.lastname`])
        .getMany();
    if (result[0]) {
        return res.status(200).json({
            message: "success",
            result: result
        });
    }
    else {
        res.status(404).json({
            message: "no users found"
        });
    }
};
exports.default = { getCustomer };
