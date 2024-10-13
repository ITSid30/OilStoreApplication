import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OilService } from '../../services/oil.service';
import { Oil } from '../../model';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
} from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css',
})
export class ProductOverviewComponent implements OnInit {

  productId: number = 0;
  public oilData!: Oil;

  constructor(private route: ActivatedRoute,
    private oilService: OilService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Capture the product id from the route
    this.route.params.subscribe((params: { [x: string]: number; }) => {
      this.productId = params['id'];
      this.getOilData(this.productId);
    });
  }

  private getOilData(productId: number): void {
    this.oilService.getOil(productId).subscribe(
      (res) => {
        this.oilData = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public editOil(oilId: number): void {
    
    const dialog = this.dialog.open(EditProductComponent, {
      width: '400px',  // Size of the dialog
      data: { id: this.oilData.id, name: this.oilData.name, price: this.oilData.price, quantity: this.oilData.quantity }
    });

    dialog.afterClosed().subscribe((resId) => {
      this.getOilData(resId);
    });
  }

  public deleteOil(oilId: number): void {
    const dialog = this.dialog.open(DeleteProductComponent, {
      width: '400px',
      data: { id: this.oilData.id },
    });

    dialog.afterClosed().subscribe((res) => {
      if(res.action == 'delete') {
        this.router.navigate(['oils']);
      }
    });
  }

}
