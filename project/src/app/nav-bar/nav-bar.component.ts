import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: [ './nav-bar.component.css' ]
})
export class NavBarComponent implements OnInit {
	constructor(private loginService: LoginService, private location: Location) {}

	ngOnInit() {}

	logout(): any {
		this.loginService.logout();
		this.location.go('/');
	}
}
