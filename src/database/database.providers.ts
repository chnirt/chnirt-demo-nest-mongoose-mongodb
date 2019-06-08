import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://chnirt:chin04071803@ds055690.mlab.com:55690/nest-graphql',
      ),
  },
];
