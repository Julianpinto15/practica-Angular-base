import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CounterModelu } from './counter/components/counter/couter.module';
import { heroeModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModelu, heroeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
