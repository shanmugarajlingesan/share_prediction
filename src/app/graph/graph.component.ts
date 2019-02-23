import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
    a1:number;
    a2:number;
    a3:number;
    a4:number;
    a5:number;
    a6:number;

    data:any;
  constructor() {
    this.a1 = Math.floor((Math.random() * 100) + 1);
      this.a2 = Math.floor((Math.random() * 100) + 1);
      this.a3 = Math.floor((Math.random() * 100) + 1);
      this.a4 = Math.floor((Math.random() * 100) + 1);
      this.a5 = Math.floor((Math.random() * 100) + 1);
      this.a6 = Math.floor((Math.random() * 100) + 1);
      console.log(this.a1);
   
    
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [this.a2+2, this.a6-2, this.a1-30,this.a5-2, this.a3-4, this.a5+5,this.a4-3],
              fill: false,
                    borderColor: '#4bc0c0'
          },
          {
              label: 'Second Dataset',
              data: [this.a1-2,this.a6-5,this.a5-5, this.a1-4, this.a2+3, this.a4-1, this.a3+3],
              fill: false,
              borderColor: '#565656'
          }
      ]
  }


   }

  ngOnInit() {
  }

}
