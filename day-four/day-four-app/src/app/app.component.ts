import { Observable } from 'rxjs';
import { PostService } from './posts.service';
import { Component } from '@angular/core';
import { Post } from './post.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	posts: Observable<Post[]>;
	constructor(private post: PostService) {
		this.posts = this.post.getData();
	}
}
