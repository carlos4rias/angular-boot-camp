import { User } from './user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.interface';

@Injectable()
export class DataService {
	constructor(private http: HttpClient) {}

	getData<T>(url: string): Observable<T> {
		return this.http.get<T>(url);
	}
}
