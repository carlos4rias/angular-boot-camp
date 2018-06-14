import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: [ './button.component.css' ]
})
export class ButtonComponent {
	@Output() add: EventEmitter<number> = new EventEmitter();

	onUpdate(value: number) {
		this.add.emit(value);
	}
}
