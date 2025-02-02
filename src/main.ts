import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';  // Ovo je ključno!
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),   // 🚀 Omogućava HttpClient u celoj aplikaciji
    provideClientHydration(withEventReplay()),
  ]
});
