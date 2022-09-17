// import {Connection,createConnection} from 'typeorm'


// export const  connection =  createConnection()

import { Connection, ConnectionManager, ConnectionOptions, createConnection, getConnectionManager } from 'typeorm';

export class Database {
  private connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  public async getConnection(name: string): Promise<Connection> {
    const CONNECTION_NAME: string = name;
    let connection: Connection;
    const hasConnection = this.connectionManager.has(CONNECTION_NAME);
    if (hasConnection) {
      connection = this.connectionManager.get(CONNECTION_NAME);
      if (!connection.isConnected) {
        connection = await connection.connect();
      }
    } else {

      const connectionOptions: ConnectionOptions = {
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
      connection = await createConnection(connectionOptions);
    }
    return connection;
  }
}

