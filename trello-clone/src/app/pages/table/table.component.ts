import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  products: Product[] = []
  columns: string[] = ['ID', 'Nombre', 'Precio', 'Cover']
  total = 0;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        this.products = data
        this.total = this.products.map(item => item.price).reduce((price, total) => price + total, 0)
      })
  }

}
