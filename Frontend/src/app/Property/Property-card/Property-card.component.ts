import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
   // template:`<h1> I am card</h1>`,
   templateUrl:'Property-card.component.html',
    //styles:[`h1{font-weight:normal;}`]
    styleUrls:['Property-card.component.css']
})
export class PropertyCardComponent{
    Property : any ={
        "id" :1,
        "Name":"Prakash House",
        "type":"house",
        "Price":70000
    }
}