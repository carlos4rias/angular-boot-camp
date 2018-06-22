import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.interface';

@Injectable({
	providedIn: 'root'
})
export class DataManagerService {
	urlBase: string = 'api/';
	constructor(private http: HttpClient) {}

	getData<T>(url: string): Observable<T> {
		return this.http.get<T>(`${this.urlBase}${url}`);
	}
}
