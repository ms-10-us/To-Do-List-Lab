import { Component } from '@angular/core';
import { Todo } from '../../interface/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: false,

  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  

  allToDos: Todo[] = [
    { task: "Fold Clothes", completed: true, duration: 2.0, isRemoved: false},
    { task: "Put Clothes in Dresser", completed: true, duration: 0.5, isRemoved: false},
    { task: "Call Mom", completed: false, duration: 0.75, isRemoved: false},
    { task: "Relax", completed: false, duration: 0.0, isRemoved: false }
  ]

  displayCompleted(todo: Todo): string {
    if (!todo.completed) {
      return "Completed";
    }
    else {
      return "";
    }
  }

  displayX(): string {
    return "X";
  }

  completeTask(todo: Todo): void {
    todo.completed = true;
  }

  removeItem(todo: Todo): void {
    todo.isRemoved = true;
  }

  addToDo: Todo = {
    task: '',
    completed: false,
    duration: 0,
    isRemoved: false,
    }

    
  addTask(): void{
   this.allToDos.push(this.addToDo);
   this.addToDo = {} as Todo;
 }

}
