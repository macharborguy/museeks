/**
 * Module in charge of handling Last.fm scrobbling when enabled
 *
 * For mode understanding on how this module works, you can check the Last.fm
 * API documentation for scrobbling:
 * https://www.last.fm/api/scrobbling
 */

// import { ipcMain } from 'electron';
// import * as pjson from 'pjson';
// import * as crypto from 'crypto';
// import axios from 'axios';
// import { shell } from 'electron';

import ModuleWindow from './module-window';
// import { TrackModel } from 'src/shared/types/interfaces';

// const LASTFM_API_URL = 'https://ws.audioscrobbler.com';
// const API_KEY = 'f86e0098731b9daba4c6f5e5b2c4db27';
// const API_SECRET = '1b61463af4bcaba19a6b5950e7fa98d4';
// const USER_AGENT = `${pjson.name}/v${pjson.version}`;

class LastFmModule extends ModuleWindow {
  load () {

    // axios
    //   .get(`${LASTFM_API_URL}/2.0/?method=auth.gettoken&api_key=${API_KEY}&format=json`)
    //   .then(response => {
    //     if (response.data.token) {
    //       const token = response.data.token;
    //       shell.openExternal(`http://www.last.fm/api/auth/?api_key=${API_KEY}&token=${token}`);

    //       const concat = `api_key${API_KEY}methodauth.getSessiontoken${token}${API_SECRET}`;

    //       const sig = crypto.createHash('md5').update(concat).digest('hex');
    //       axios
    //         .get(`${LASTFM_API_URL}/2.0/?method=auth.getSession&api_key=${API_KEY}&token=${token}&api_sig=${sig}&format=json`)
    //         .then(response => {
    //           console.log('HERE', response.data);
    //         })
    //         .catch((err) => {
    //           console.error(`An error occured when trying to get a Last.fm session: ${err.response.data.message}`);
    //         });
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(`An error occured when trying to get a Last.fm token: ${err.response.data.message}`);
    //   });
  }
}

export default LastFmModule;
