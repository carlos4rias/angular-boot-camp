import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title: string = 'my application';
	author: string = 'Carlos Andres Arias Londo#o';
	count: number = 0;
}
