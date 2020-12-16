import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import configuration from './config/configuration';
import { SeedsModule } from './shared/seeds.module';
import { TaxisModule } from './taxi/taxi..module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      expandVariables: true,
      load: [configuration],
    }),
    // MongoDB Atlas connection uri
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri'),
        useNewUrlParser: true, // parse connection string using new method
        useCreateIndex: true, // will use the leatest method for creating an index
      }),
      inject: [ConfigService],
    }),
    // import all sub module to this root module
    TaxisModule,

    //  This below modules are for seeder
    CommandModule,
    SeedsModule
  ]
})
export class AppModule { }
