import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersService } from './users/users.service';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      debug: true,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService, CatsService],
})
export class AppModule {}
