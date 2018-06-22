import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	isLogged: boolean = false;
	user: string = 'carlos';
	password: string = '123';
	constructor() {}

	login(user: string, password: string): any {
		if (user === this.user && password === this.password) {
			this.isLogged = true;
			return true;
		}
		return false;
	}
}
