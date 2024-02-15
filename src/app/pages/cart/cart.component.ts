import { Component, Inject, OnInit } from '@angular/core';
import { Staff } from '../../model/staff';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  public shoppingCart:Array<Staff>

  constructor(private ss:StaffService){
    this.shoppingCart=new Array<Staff>()
    
  }
  ngOnInit(): void {
    
  }

  AddTocart($event: Staff){
    if(this.shoppingCart.find(staff=>staff.id===$event.id)==null){
      this.shoppingCart.push($event)
    }else{
      this.shoppingCart[this.shoppingCart.indexOf($event)].quantity+=1

    }
  }
  get total(){
    let sum=0;
    this.shoppingCart.forEach((staff:Staff)=>{
      sum+=staff.price*staff.quantity
    })
    return sum ;
  }

}
