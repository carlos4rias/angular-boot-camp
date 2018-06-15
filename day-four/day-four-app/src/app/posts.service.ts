import { User } from './user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.interface';

@Injectable()
export class PostService {
	urlPosts: string = 'http://jsonplaceholder.typicode.com/posts/';
	urlUsers: string = 'http://jsonplaceholder.typicode.com/users/';

	constructor(private http: HttpClient) {}

	getData(userId?: string): Observable<any> {
		if (!userId) return this.http.get<Post[]>(this.urlPosts);
		else return this.http.get<User>(this.urlUsers + userId);
	}
}
