import { Component } from '@angular/core';
import { OilService } from './services/oil.service';
import { Oil } from './model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oilStore';

  // oils = [
  //   { id: 1, name: 'Oil1', quantity: '1 L', price: 10 },
  //   { id: 2, name: 'Oil2', quantity: '1 L', price: 20 },
  //   { id: 3, name: 'Oil3', quantity: '1 L', price: 30 },
  //   { id: 3, name: 'Oil3', quantity: '1 L', price: 30 },
  //   { id: 3, name: 'Oil3', quantity: '1 L', price: 30 },
  // ];
  public oils: Oil[] = [];

  constructor(private oilService: OilService,
    private router: Router
  ) {}

  // ngOnInit() {
  //   this.getOils();
  // }

  // private getOils(): void {
  //   this.oilService.getAllOils().subscribe(
  //     (res) => {
  //       this.oils = res;
  //       console.log('Oils:', this.oils);
  //     },
  //     (error) => {
  //       console.error('Error fetching oils:', error);
  //     }
  //   );
  // }

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

}
