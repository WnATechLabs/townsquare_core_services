import App from '@/app';
import validateEnv from '@utils/validateEnv';
import { v1_0 } from '@core'

validateEnv();

const app = new App([new v1_0.Router]);

app.listen();
