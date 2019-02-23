import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
data:any;
header:string ="Tharanes";
StockDetail:stock[];
  constructor() {
    this.StockDetail=[
     {
       name: "National Stock Exchange",
       item1:  "Adani Ports ",
       item2: "Aditya Birla",
       item3:  "Ashok Leyland",
       item4: "Asian Paints",
       item5: "Bajaj Finance Ltd"
      },
      {
        name: "Bombay Stock Exchange",
        item1:  "Axis Bank ",
        item2: "Apollo Hospital",
        item3:  "Laurson & Taubro",
        item4: "Bharathi Airtel Ltd",
        item5: "Bosch"
       },
       {
        name: "New York Stock Exchange",
        item1:  "Apple ",
        item2: "Dominos pizza",
        item3:  "ICICI Bank",
        item4: "Mcdonalds ",
        item5: "Mcgrawhill"
       },
       {
        name: "NADSAQ",
        item1:  "Apple ",
        item2: "Microsoft",
        item3:  "Google",
        item4: "Mcdonalds",
        item5: "Vodafone"
       },
       {
        name: "London Stock Exchange",
        item1:  "HSBC ",
        item2: "Royal Dutch Shell ",
        item3:  "Glaxo Smith Kine ",
        item4: "Mcdonalds ",
        item5: "IBM"
       }
    ]

   }

  ngOnInit() {
  }

}
interface stock{
  name: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
}