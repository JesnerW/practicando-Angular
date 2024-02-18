import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) img: string = '';
  @Input({ required: true }) precio: number = 0;
  @Input({ required: true }) title: string = '';

  @Output() addToCart = new EventEmitter;

  addToCardHandler() {
    console.log('click form child')
    this.addToCart.emit('Hola este es un msg desde el hijo: ' + this.title)
  }
}
