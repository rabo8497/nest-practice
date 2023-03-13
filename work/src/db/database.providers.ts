import User from 'src/auth/user.entity';
import Sche from 'src/schedule/schedule.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5123,
        username: 'postgres',
        password: '',
        database: 'work',
        entities: [
            User,
            Sche,
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];