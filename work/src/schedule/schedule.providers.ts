import { DataSource } from "typeorm";
import Sche from "./schedule.entity";

export const scheduleProviders = [
    {
      provide: 'SCHE_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Sche),
      inject: ['DATA_SOURCE'],
    },
  ];