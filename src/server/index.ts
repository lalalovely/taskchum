import http from 'http';

import makeApp from './app';
import config from './config/config';

let server: any;

(async function () {
  const app = await makeApp();

  server = http.createServer(app);

  server.listen(config.PORT, () => {
    console.log('Initializing server');
    console.log('Migrating database');
    console.log(`Server ready to serve traffic http://${config.HOST}:${config.PORT}`);
  });
})();
