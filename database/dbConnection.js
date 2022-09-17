"use strict";
// import {Connection,createConnection} from 'typeorm'
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
// export const  connection =  createConnection()
const typeorm_1 = require("typeorm");
class Database {
    connectionManager;
    constructor() {
        this.connectionManager = (0, typeorm_1.getConnectionManager)();
    }
    async getConnection(name) {
        const CONNECTION_NAME = name;
        let connection;
        const hasConnection = this.connectionManager.has(CONNECTION_NAME);
        if (hasConnection) {
            connection = this.connectionManager.get(CONNECTION_NAME);
            if (!connection.isConnected) {
                connection = await connection.connect();
            }
        }
        else {
            const connectionOptions = {
                name: 'default',
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'Dhan1234!',
                database: 'TejaDb',
                synchronize: false,
                logging: true,
                entities: ['src/entities/**/*.js'],
                migrations: ['src/migration/**/*.js'],
                subscribers: ['src/subscriber/**/*.js'],
            };
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        return connection;
    }
}
exports.Database = Database;
