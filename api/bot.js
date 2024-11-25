const { Telegraf } = require('telegraf');
const express = require('express');
require('dotenv').config();

const app = express();

// Bot tokenini .env faylidan olish
const bot = new Telegraf(process.env.BOT_TOKEN);

// Bot buyruqlari
bot.start((ctx) => ctx.reply('Salom! Men Telegram botman!'));
bot.help((ctx) => ctx.reply('Buyruqlar ro‘yxati: /start, /help'));
bot.on('text', (ctx) => ctx.reply(`Siz yozdingiz: ${ctx.message.text}`));

// Webhook uchun URL yo'lini sozlash
app.use(bot.webhookCallback('/telegram-bot'));  // Vercel-da bu yo'lni ishlatamiz

// Vercel serverless function sifatida ishlashi uchun module.exports orqali eksport qilish
module.exports = app;
