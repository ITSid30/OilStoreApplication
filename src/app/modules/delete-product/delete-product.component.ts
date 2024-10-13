import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OilService } from '../../services/oil.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private oilService: OilService 
  ) {}

  ngOnInit(): void {
      // this.deleteOil(oilId);
  }

  public deleteOil(): void {
    this.oilService.deleteOil(this.data.id).subscribe((res) => {
      this.dialogRef.close({
        action: 'delete'
      });
    });
  }

}
