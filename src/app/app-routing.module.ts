import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { PredictComponent } from './predict/predict.component';
import { GraphComponent } from './graph/graph.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'stock',component:StockComponent},
  {path:'predict',component:PredictComponent},
  {path:'graph',component:GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClient
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
