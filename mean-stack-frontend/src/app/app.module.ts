import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  { path: '', component: ItemsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    ItemsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
