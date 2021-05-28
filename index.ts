import { app } from './src/app';
import loggin from './src/config/loggin';
import config from './src/config/config';
import init from './src/config/setup';

const NAMESPACE = 'Index';

init();

app.listen(config.server.port, () => loggin.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
