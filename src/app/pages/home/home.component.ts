import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopformComponent } from '../popform/popform.component';
import { DialogRef } from '@angular/cdk/dialog';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../model/staff';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  staffList!: Staff[];
  constructor(private dialog:MatDialog,
    private staffService:StaffService
      
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

}
