"use strict";
/**
 * Gandalf
 * Copyright (c) 2020 Gandalf Planetarion Tools
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/gpl-3.0.html
 *
 * @name Ship.js
 * @version 2023/04/20
 * @summary Circuit command
 **/

import util from "util";
import Config from "sauron";
import { Mordor, Ship } from "mordor";
import Spells from "../Spells/Book.js";

import { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } from "discord.js";

import { encode } from "html-entities";
import numeral from "numeral";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);


export default {
    data: new SlashCommandBuilder()
        .setName("launch")
        .setDescription("Calculates when ships should be launched to land at LT.")
        .addIntegerOption(o => o.setName("eta").setDescription("eta").setRequired(false).setMinValue(8).setMaxValue(14))
        .addIntegerOption(o => o.setName("lt").setDescription("lt").setRequired(false).setMinValue(Config.pa.tick.start).setMaxValue(Config.pa.tick.end))
        .addStringOption(o => o.setName("timezone").setDescription("timezone").setRequired(false)),
    async execute(interaction) {
        let _eta = interaction.options.getInteger("eta");
        let _lt = interaction.options.getInteger("lt");
        let _tzone = interaction.options.getString("timezone");

        let reply = await Spells.launch({eta: _eta, lt: _lt, tz: args[2]});
        await interaction.reply(reply);

    }
};


