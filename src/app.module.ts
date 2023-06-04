import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TelegramModule } from './telegram/telegram.module';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, AuthModule, TelegramModule],
    providers: [AppService],
})
export class AppModule {}
