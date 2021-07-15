import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlugCheckoutModule } from '@plug-checkout/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PlugCheckoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
