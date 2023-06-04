import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { options } from './async-options';

@Module({
    imports: [TelegrafModule.forRootAsync(options())],
})
export class TelegramModule {}
