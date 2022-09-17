"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDBRepository = void 0;
const typeorm_1 = require("typeorm");
/**
 * gets repository of provided entity
 * @param connection_name name of the DB Connection
 * @param entity Entity name
 * @returns repository connection
 */
function getDBRepository(connection_name, entity) {
    return (0, typeorm_1.getConnection)(connection_name).getRepository(entity);
}
exports.getDBRepository = getDBRepository;
