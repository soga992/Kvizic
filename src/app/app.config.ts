import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Za HTTP klijent
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),     // Povezivanje ruta
    provideHttpClient(),       // Omogućavanje HTTP klijenta
  ]
};
