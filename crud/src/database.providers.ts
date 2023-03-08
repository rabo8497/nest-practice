import { DataSource } from 'typeorm';
import { Board } from './boards/board.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5123,
        username: 'postgres',
        password: 'secreet',
        database: 'board-app',
        entities: [
            Board,
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];