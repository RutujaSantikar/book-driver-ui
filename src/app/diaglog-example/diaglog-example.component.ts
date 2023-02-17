import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';



@Component({
  selector: 'app-diaglog-example',
  templateUrl: './diaglog-example.component.html',
  styleUrls: ['./diaglog-example.component.scss']
})
export class DiaglogExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any  , private dialogRef: MatDialogRef<DiaglogExampleComponent>) { }


  ngOnInit(): void {

    this.potentialRateForm= new FormGroup({

      trip : new FormControl(this.data.trip),
      duration : new FormControl(this.data.duration),
      frequency : new FormControl(this.data.frequency),
      charges : new FormControl(this.data.charges),
      overtime : new FormControl(this.data.overtime),

    });


  }

  potentialRateForm = new FormGroup({
    trip : new FormControl(''),
    duration : new FormControl(''),
    frequency : new FormControl(''),
    charges : new FormControl(''),
    overtime : new FormControl(''),
});


 saveData(){

    this.dialogRef.close(this.potentialRateForm.value);
  console.log(this.potentialRateForm.value);
 }

}
