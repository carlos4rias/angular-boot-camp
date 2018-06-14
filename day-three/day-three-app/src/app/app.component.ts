import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, pluck, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	/* 
	value: number = 0;

	addToValue(event: number) {
		this.value += event;
	} */
	/* 
	isAuthenticated: boolean = false;
	 */
	/*
	posts = [
		{
			userId: 1,
			id: 1,
			title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body:
				'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
		},
		{
			userId: 1,
			id: 2,
			title: 'qui est esse',
			body:
				'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
		},
		{
			userId: 1,
			id: 3,
			title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
			body:
				'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
		}
	];
 */
	/* 
	showName(name: string) {
		console.log(name);
	}
	 */

	//using lazy pipe

	url: string = 'https://jsonplaceholder.typicode.com/posts/1';
	posts$: Observable<any>;
	constructor(private http: HttpClient) {
		this.posts$ = this.http.get(this.url).pipe(filter((post) => post['id'] % 2 !== 0), pluck('title'));
	}

	isEven(id: number): boolean {
		return id % 2 === 0;
	}
}
