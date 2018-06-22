import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	errorMessage: string;
	constructor(private route: ActivatedRoute, public loginService: LoginService, private location: Location) {}

	ngOnInit() {}

	login(name: string, password: string): void {
		if (this.loginService.login(name, password)) {
			this.location.go('/dashboard');
		} else {
			this.errorMessage = 'Compruebe sus credenciales';
		}
	}
}
