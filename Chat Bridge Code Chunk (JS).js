/**
 * Minecraft Chat Bridge for Hypixel
 * Connects to Hypixel using Microsoft auth, joins Sh4d08's freebuild,
 * and forwards all chat messages to a Discord channel.
 */

const mineflayer = require('mineflayer');
const fs = require('fs');
const path = require('path');

// Keep Microsoft auth tokens inside the project directory so they survive Replit container resets
const AUTH_CACHE_DIR = path.join(__dirname, '.minecraft-cache');

const DISCORD_TOKEN = process.env.TOKEN;
const CHAT_CHANNEL_ID = '1482890822864338984';
const MS_EMAIL = process.env.MICROSOFT_EMAIL;

const ZERO_WIDTH = '\u200B';
const STATUS_FILE = path.join(__dirname, 'mc_bot_status.json');
const FREEBUILD_FILE = path.join(__dirname, 'freebuild_status.json');
const CHAT_STATUS_FILE = path.join(__dirname, 'chat_status.json');
