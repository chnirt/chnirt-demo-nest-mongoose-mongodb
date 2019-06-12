import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(
      'mongodb://chnirt:chin04071803@ds055690.mlab.com:55690/nest-graphql',
      { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
