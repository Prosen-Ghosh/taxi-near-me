import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaxisModule } from './taxi/taxi..module';

@Module({
  imports: [
    // MongoDB Atlas connection uri
    MongooseModule.forRoot("mongodb+srv://root:root@cluster0.mhmbp.mongodb.net/taxi-near-me?retryWrites=true&w=majority", {
      useNewUrlParser: true // parse connection string using new method
    }),
    // import all sub module to this root module
    TaxisModule
  ]
})
export class AppModule { }
