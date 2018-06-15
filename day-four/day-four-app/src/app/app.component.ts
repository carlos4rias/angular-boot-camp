import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Component } from '@angular/core';
import { Post } from './post.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	posts: Observable<Post[]>;
	constructor(private post: DataService) {
		this.posts = this.post.getData();
	}
}
