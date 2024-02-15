import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopformComponent } from '../popform/popform.component';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../model/staff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @Output() public addTocart=new EventEmitter<Staff>()

  staffList!: Staff[];
  constructor(private dialog:MatDialog,
    private staffService:StaffService,
    private route:Router
      
    ){}
  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    this.staffService.getAll().subscribe((resp:Staff[])=>{
      console.log("results are =>",resp)
      this.staffList=resp;
    })
  }

  add(){
    const options={
      data:{
        crudeMode:'create',
        staff:null
      },
      disableClose:true
    }
    const dialogRef=this.dialog.open(PopformComponent,options);

    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
      if(result!==undefined)
      this.getAll();
    })
    
  }

  edit(staff:Staff){
    const options={
      data:{
        crudeMode:'edit',
        staff:staff
      },
      disableClose:true
    }
    const dialogRef=this.dialog.open(PopformComponent,options);
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
      if(result!==undefined)
      this.getAll();
    })  
  }

  onCart(ids:number){
    this.addTocart.emit(this.staffList.find(staff=>staff.id===ids));
    this.route.navigate(['/cart'])

    //console.log(this.staffList.find(staff=>staff.id===ids))
    
  }

  

}
