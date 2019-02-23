import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { PredictComponent } from './predict/predict.component';
import { HeaderComponent } from './header/header.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import {AccordionModule} from 'primeng/accordion';
import { GraphComponent } from './graph/graph.component';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    PredictComponent,
    HeaderComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ChartModule,
    AccordionModule,
    ToastModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
