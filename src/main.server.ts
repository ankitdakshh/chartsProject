import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/AppModule';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppModule, config);

export default bootstrap;
