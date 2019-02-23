import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
  stocksArray:stocks[];
  stock:stocks;
  data:any;
  toggle:boolean;
  showGraph:boolean=false;
  type:string;
  constructor(private route : Router) { 
    this.stocksArray = [
      {name:"AAL",code:1},
      {name:"AAPL",code:2},
      {name:"Platinum",code:3},
      {name:"Bronze",code:4}
      
    ];
    this.toggle=false;

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
                    borderColor: '#4bc0c0'
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#565656'
          }
      ]
  }

    
  }

  ngOnInit() {
    $(document).ready(function(){

      $(".card-show").hover(function(){
    
          $(".show-text").addClass("active");  //Add the active class to the area is hovered
      }, function () {
          $(".show-text").removeClass("active");
      });
    
    });    
  }
  Linear(type:string){
    this.type = type;
console.log(type);

if(this.toggle){
  this.toggle=false;
}
else{
  this.toggle=true;
}
  }

  dropdown(){
    console.log(this.stock.name);
  }

  onChange(event) {
    console.log('Processing '+this.stock.name);
    
    this.showGraph = true;
     }
     reset(){
       this.showGraph = false;
     }
}

interface stocks{
  name:string;
  code:number;
}