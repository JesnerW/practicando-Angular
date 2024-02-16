import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola!';
  task = signal([
    "Instalar el angular CLI",
    "Crear proyecto",
    "Crear componentes"
  ]);
  name = signal("Jesner");
  age = 29
  texto = "";
  person = signal({
    name: this.name(),
    age: 29,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  })

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50, {
    nonNullable: true
  })
  nameCtrl = new FormControl(50, {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  })
  constructor() {
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value)
    })
  }
  ingresandoTexto(event: Event) {
    const input = event.target as HTMLInputElement
    this.texto = input.value
    this.name.set(input.value)
  }
}
