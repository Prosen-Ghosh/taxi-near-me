import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import { SeedsModule } from './shared/seeds.module';
import { TaxisModule } from './taxi/taxi..module';

@Module({
  imports: [
    // MongoDB Atlas connection uri
    MongooseModule.forRoot("mongodb+srv://root:root@cluster0.mhmbp.mongodb.net/taxi-near-me?retryWrites=true&w=majority", {
      useNewUrlParser: true, // parse connection string using new method
      useCreateIndex: true, // will use the leatest method for creating an index
    }),
    // import all sub module to this root module
    TaxisModule,

    //  This below modules are for seeder
    CommandModule,
    SeedsModule
  ]
})
export class AppModule { }
