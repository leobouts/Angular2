import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Comp2 } from './comp2.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ,Comp2 ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }