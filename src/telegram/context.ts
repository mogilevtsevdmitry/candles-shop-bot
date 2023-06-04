import { Scenes } from 'telegraf';
import { SceneSessionData } from 'telegraf/typings/scenes';

export type Context<T extends SceneSessionData = SceneSessionData> = Scenes.SceneContext<T>;
