import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../model/staff';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-popform',
  templateUrl: './popform.component.html',
  styleUrl: './popform.component.css'
})
export class PopformComponent implements OnInit{
  personal!:FormGroup
  crudeMode!: string;
  staff!: Staff;

  

  constructor(private dialogRef:MatDialogRef<PopformComponent>,
    @Inject (MAT_DIALOG_DATA) private data:{crudeMode:string,staff:Staff},
    private staffService:StaffService,

  
    ){}
  ngOnInit(): void {
    this.formControl();
    console.log("passed values are =>",this.data)
    this.crudeMode = this.data.crudeMode;
    this.staff = this.data.staff;
    this.setFormValues();

  }
  setFormValues() {
    if (this.crudeMode === 'edit' && this.staff) {
      this.personal.patchValue({
        firstname: this.staff.firstname,
        middlename: this.staff.middlename,
        lastname: this.staff.lastname,
        email: this.staff.email,
        quantity: this.staff.quantity,
        price: this.staff.price,

      });
    }
  }

  formControl() {
    this.personal=new FormGroup({
      firstname:new FormControl('',[Validators.required]),
      middlename:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      quantity:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required]),

    })
  }
  popClose(){
    this.dialogRef.close("dialog has been closed");
  }
  save(){
    const value=this.personal.value;
    // this.staffService.add(value).subscribe((response)=>{
    //   console.log("my value are =>",response)
    // })

    if (this.crudeMode === 'create') {
      this.staffService.add(value).subscribe((response) => {
        console.log("my value are =>", response);
        this.popClose()

      });
    } else if (this.crudeMode === 'edit' && this.staff) {
      this.staffService.update(this.staff.id, value).subscribe((response) => {
        console.log("my value are =>", response);
        this.popClose()

      });
    }

    // this.popClose()

  }
  
  close(){
    this.popClose()
  }
  
}


