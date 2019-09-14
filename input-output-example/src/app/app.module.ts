import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowersListComponent } from './flowers-list/flowers-list.component';
import { FlowersCardComponent } from './flowers-card/flowers-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowersListComponent,
    FlowersCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
