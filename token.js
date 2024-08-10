import { Markup, Telegraf } from "telegraf";

export const token = "7386065922:AAFEb5iqND1w1zhnDbxWOdc_-TUJuitj09E";

const bot = new Telegraf(token);
const webAppUrl = "https://google.com";
bot.command("start", (ctx) => {
  ctx.reply(
    "Привет, нажми на кнопку ниже, для запуска приложения",
    Markup.keyboard([Markup.button.webApp("Отправить сообщение", webAppUrl)])
  );
});

bot.launch();
