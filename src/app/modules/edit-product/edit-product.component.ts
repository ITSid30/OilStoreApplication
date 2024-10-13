import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Oil } from '../../model';
import { OilService } from '../../services/oil.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

  public editForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private oilService: OilService
  ) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: this.data.id,
      name: this.data.name,
      price: this.data.price,
      quantity: this.data.quantity,
    });
  }

  onSave(): void {
    let updatedOil: Oil = {
      id: this.data.id,
      name: this.editForm.value.name,
      price: this.editForm.value.price,
      quantity: this.editForm.value.quantity,
    }
    this.oilService.updateOil(updatedOil).subscribe(res => {
      console.log(res);
      this.dialogRef.close(res.id);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
