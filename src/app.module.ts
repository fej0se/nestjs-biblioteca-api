import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { BooksController } from './controllers/books.controller';
import { Book } from './models/book.model';
import { BooksService } from './services/books.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: process.env.SQLITE_PATH,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Book]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
