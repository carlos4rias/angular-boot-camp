import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	constructor() {}
	createDb() {
		const employess = [
			{ id: 1, name: 'Peter', company: 'Alondra', age: '27', birthday: '1990-07-24', project: 1 },
			{ id: 2, name: 'Carlos Andres', company: 'xWa', age: '27', birthday: '1991-05-20', project: 2 },
			{ id: 4, name: 'Juan', company: 'Yuxi', age: '24', birthday: '1994-09-24', project: 1 }
		];
		const projects = [
			{ id: 1, name: 'Angux', client: 'Wax', employess: [ 1, 4 ] },
			{ id: 2, name: 'Ng', client: 'NGTEch', employess: [ 2 ] }
		];
		return { employess, projects };
	}
}
