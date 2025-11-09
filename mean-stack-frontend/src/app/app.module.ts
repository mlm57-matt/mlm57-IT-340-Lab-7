import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,  
    ItemsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
