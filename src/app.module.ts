import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { DatabaseConnectionService } from './dbConnection/dbConnection';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    QuizModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }    
