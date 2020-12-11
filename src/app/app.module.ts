import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeJa from '@angular/common/locales/ja';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CapitalizedPipe,
    SecureDomPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeEs);
registerLocaleData(localeJa);
