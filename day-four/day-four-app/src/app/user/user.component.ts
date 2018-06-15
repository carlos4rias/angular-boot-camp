import { User } from './../user.interface';
import { PostService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.css' ]
})
export class UserComponent {
	user: User;
	idUser: string;
	constructor(private post: PostService) {}
	getUser() {
		this.post.getData(this.idUser).subscribe((data) => (this.user = data));
		console.log(this.idUser);
	}
}
