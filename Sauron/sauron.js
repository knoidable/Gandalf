/**
 * Gandalf
 * Copyright (C) 2020 Craig Roberts, Braden Edmunds, Alex High
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
 * @name sauron.js
 * @version 2022/11/16
 * @summary vite config
 **/
'use strict';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import Config from 'galadriel';


/** @type {import('vite').UserConfig} */
export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
      }
    },
    server: {
      host: 'localhost',
      port: Config.web.port,
      strictPort: true,
      open: './index.html'
    },
    define: {
      aConfig: JSON.stringify(Config.alliance),
      pConfig: JSON.stringify(Config.pa)
    }
  }
});
