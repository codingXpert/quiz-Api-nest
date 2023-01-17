import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: "default",
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      // username: process.env.DATABASE_USER,
      username:'postgres',
      // password:process.env.DATABASE_PASSWORD,
      password:'admin@123',
      database: process.env.DATABASE_DB,
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: ["dist/**/*.entity.js"],
    };
  }
}
