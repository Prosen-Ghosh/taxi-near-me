import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
// import { CoreModule } from './core/core.module';
import { AppModule } from './app.module';

(async () => {
    const app = await NestFactory.createApplicationContext(AppModule);
    app
        .select(CommandModule)
        .get(CommandService)
        .exec();
})();