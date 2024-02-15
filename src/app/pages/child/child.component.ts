import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() beverages="tea";

  @Output() newbeverages=new EventEmitter<string>()

  addNew(value:string){
    this.newbeverages.emit(value);
  }

}
