import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-keyboard',
	templateUrl: './keyboard.component.html',
	styleUrls: [ './keyboard.component.css' ]
})
export class KeyboardComponent implements OnInit {
	text: string = '';
	values: Array<string>;
	constructor() {
		this.values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
		this.values.sort(() => {
			return 0.5 - Math.random();
		});
	}

	ngOnInit() {}

	clearInput() {
		this.text = '';
	}

	addValue(value: string) {
		this.text += value;
	}
}
