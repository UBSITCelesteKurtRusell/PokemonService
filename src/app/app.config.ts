import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // We will define this next

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // <--- CRITICAL: Enables the router
  ]
};
