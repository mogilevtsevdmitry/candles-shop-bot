import { Action, Ctx, Start, Update } from 'nestjs-telegraf';
import { InlineKeyboardButton, KeyboardButton } from 'telegraf/typings/core/types/typegram';
import { Context } from './telegram/context';

const keyboardButtons: KeyboardButton[] = [{ text: 'Test' }];
const inlineKeyboardButtons: InlineKeyboardButton[] = [
    { text: 'Test inline', web_app: { url: 'https://nestjs-telegraf.hypeer.company/telegraf-methods' } },
];

@Update()
export class AppService {
    @Start()
    async start(@Ctx() ctx: Context) {
        await ctx.replyWithHTML(
            `Приветствую <b>${ctx.from.first_name}</b> в магазине свечей ручной работы <b>"Ksuna Moon"</b>`,
            {
                reply_markup: {
                    keyboard: [keyboardButtons, inlineKeyboardButtons],
                },
            },
        );
    }

    @Action('btn')
    btn(body) {
        console.log({ body });
    }
}
