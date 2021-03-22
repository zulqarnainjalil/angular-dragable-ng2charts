import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,DragDropModule,ChartsModule ],
  declarations: [ AppComponent, HelloComponent, ChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
