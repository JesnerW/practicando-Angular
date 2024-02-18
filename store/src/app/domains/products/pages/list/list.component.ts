import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  imgs = [
    {
      url: 'https://picsum.photos/640/640?r=' + Math.random(),
      precio: 45,
      title: 'Producto 1'
    },
    {
      url: 'https://picsum.photos/640/640?r=' + Math.random(),
      precio: 145,
      title: 'Producto 2'
    },
    {
      url: 'https://picsum.photos/640/640?r=' + Math.random(),
      precio: 245,
      title: 'Producto 3'
    },
    {
      url: 'https://picsum.photos/640/640?r=' + Math.random(),
      precio: 345,
      title: 'Producto 4'
    },
    {
      url: 'https://picsum.photos/640/640?r=' + Math.random(),
      precio: 345,
      title: 'Producto 5'
    },
    {
      url: 'https://picsum.photos/640/640?r=' + Math.random(),
      precio: 345,
      title: 'Producto 6'
    }
  ]
  fromChild(texto: string) {
    console.log(texto)
  }
}
