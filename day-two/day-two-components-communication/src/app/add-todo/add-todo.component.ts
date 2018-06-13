import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-todo',
	templateUrl: './add-todo.component.html',
	styleUrls: [ './add-todo.component.css' ]
})
export class AddTodoComponent implements OnInit {
	todoParent: string;
	constructor() {}

	ngOnInit() {}

	print(value: string) {
		this.todoParent = value;
	}
}
