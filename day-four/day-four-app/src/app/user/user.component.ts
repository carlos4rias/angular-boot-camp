import { User } from './../user.interface';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.css' ]
})
export class UserComponent {
	user: User;
	idUser: string;
	constructor(private post: DataService) {}
	getUser() {
		this.post.getData(this.idUser).subscribe((data) => (this.user = data));
		console.log(this.idUser);
	}
}
