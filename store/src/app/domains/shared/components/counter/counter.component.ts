import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;
  constructor() {
    // No Async
    // antes del render
    // corre una vez
    console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges) {
    // antes y durante el render
    console.log('ngOnChanges')
    console.log(changes)
    const duration = changes['duration']
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething()
    }
  }

  ngOnInit() {
    // después de renderizar
    // corre una vez
    // se puede ejecutar funciones ASYNC
    console.log('ngOnInit')
    console.log('duration => ', this.duration)
    console.log('message => ', this.message)
    this.counterRef = window.setInterval(() => {
      console.log(this.counter())
      this.counter.update(count => count + 1)
    }, 1000)
  }

  ngAfterViewInit() {
    // después de renderizar
    // hijos ya fueron renderizados
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
    // cuando un componente es destruido
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('Change Duration')
    // puede correr cosas asyncronas
  }
}
