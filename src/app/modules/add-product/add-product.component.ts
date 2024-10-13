import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OilService } from '../../services/oil.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  
  public productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private oilService: OilService,
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
      this.productForm = this.fb.group({
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        quantity: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{0,2})?$')])
      });
  }

  public onSave(): void {
    let newOil = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      quantity: this.productForm.value.quantity,
      price: this.productForm.value.price,
    }

    this.oilService.addOil(newOil).subscribe(res => {
      if(res) {
        this.dialogRef.close('saved');
      }
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
