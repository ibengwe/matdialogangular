import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  currentBeverage="coffee";

  beverage=['milk','yoghurt','fresh']


  addNew(newbeverage:string){
    this.beverage.push(newbeverage);

  }

}
