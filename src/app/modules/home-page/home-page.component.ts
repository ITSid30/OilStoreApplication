import { Component } from '@angular/core';
import { OilService } from '../../services/oil.service';
import { Oil } from '../../model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public oils: Oil[] = [];

  constructor(private oilService: OilService,
    private router: Router,
    public dialog: MatDialog,
    
  ) {}

  ngOnInit() {
    this.getOils();
  }

  private getOils(): void {
    this.oilService.getAllOils().subscribe(
      (res) => {
        this.oils = res;
        console.log('Oils:', this.oils);
      },
      (error) => {
        console.error('Error fetching oils:', error);
      }
    );
  }

  public getSingleOil(id: number) {
    // this.oilService.getOil(oilId).subscribe(
    //   (res) => {
    //     console.log('SingleOil Data: ', res);
    //   }, (error) => {
    //     console.error('Error fetching oils:', error);
    //   }
    //   // to make a new route to open the single product in different page
    // )

    if (id) {
      console.log('Navigating to oil Id : ', id);
      this.router.navigate(['/oils', id]);
    } else {
      console.error('Invalid oil id:', id);
    }
  }

  public editOil(oil: Oil): void {
    const dialog = this.dialog.open(EditProductComponent, {
      width: '400px',  // Size of the dialog
      data: { 
        id: oil.id, 
        name: oil.name, 
        price: oil.price, 
        quantity: oil.quantity 
      }
    });

    dialog.afterClosed().subscribe(() => {
      this.getOils();
    });
  }

  public deleteOil(oilId: number): void {
    const dialog = this.dialog.open(DeleteProductComponent, {
      width: '400px',
      data: {
        id: oilId
      }
    });

    dialog.afterClosed().subscribe((res) => {
      if(res.action == 'delete') {
        this.getOils();
      }
    });
  }

  public addNewOil(): void {
    const dialog = this.dialog.open(AddProductComponent, {
      width: '500px',
    });

    dialog.afterClosed().subscribe(res => {
      if(res == 'saved') {
        this.getOils();
      }
    });
  }
}
