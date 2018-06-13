import { Person } from './person.module';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	carlos: Person;
	constructor() {
		this.carlos = new Person('18228282', 'Carlos Andres Arias Londo#o', 27);
	}
}
