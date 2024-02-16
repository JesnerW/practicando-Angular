import { Component, Injector, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from "./../models/task.model"
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([]);

  filter = signal<'all' | 'pending' | 'completed'>('all')
  tasksByFilter = computed(() => {
    const filter = this.filter()
    const tasks = this.tasks()
    if (filter === 'pending') {
      return tasks.filter((task) => { return !task.completed })
    }
    if (filter === 'completed') {
      return tasks.filter((task) => { return task.completed })
    }
    return tasks;
  })

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  })
  updateTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  })
  agregarTarea() {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value.trim();
      if (value !== '') {
        const newTask = {
          id: Date.now(),
          title: value,
          completed: false,
        }
        this.tasks.update((tasks) => [...tasks, newTask])
        this.newTaskCtrl.setValue('')
      }
    }
  }

  eliminarTarea(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index))
  }

  marcarTarea(index: number) {
    this.tasks.update((tasks) => tasks.map((task, position) => {
      if (position === index) {
        task.completed = !task.completed
      }
      return task
    }))
  }

  updateTask(index: number) {
    this.tasks.update(tasks => {
      return tasks.map((task, position) => {
        if (position === index) {
          this.updateTaskCtrl.setValue(task.title)
          return {
            ...task,
            editing: true
          }
        }
        return {
          ...task,
          editing: false
        }
      })
    })

  }
  updateTask_Text(index: number, text: string) {
    if (this.updateTaskCtrl.valid) {
      const value = this.updateTaskCtrl.value.trim();
      if (value !== "") {
        this.tasks.update(tasks => {
          return tasks.map((task, position) => {
            if (position === index) {
              return {
                ...task,
                title: value,
                editing: false
              }
            }
            return task;
          })
        })
      }
    }
  }

  changeFilter(filter: 'all' | 'pending' | 'completed') {
    this.filter.set(filter)
  }

  injector = inject(Injector)

  constructor() {
    effect(() => {
      const tasks = this.tasks();
      localStorage.setItem('tasks', JSON.stringify(tasks))
    })
  }

  trackTasks() {
    effect(() => {
      const tasks = this.tasks();
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }, { injector: this.injector })
  }

  ngOnInit() {
    const storage = localStorage.getItem('tasks')
    if (storage) {
      const tasks = JSON.parse(storage)
      this.tasks.set(tasks)
    }
    this.trackTasks();
  }
}
