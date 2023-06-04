import { ConfigService } from '@nestjs/config';
import { TelegrafModuleAsyncOptions, TelegrafModuleOptions } from 'nestjs-telegraf';

const telegrafModuleOptions = (cfg: ConfigService): TelegrafModuleOptions => {
    return {
        token: cfg.get('TELEGRAM_TOKEN'),
    };
};

export const options = (): TelegrafModuleAsyncOptions => {
    return {
        inject: [ConfigService],
        useFactory: (cfg: ConfigService) => telegrafModuleOptions(cfg),
    };
};
