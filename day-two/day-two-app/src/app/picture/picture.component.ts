import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-picture',
	templateUrl: './picture.component.html',
	styleUrls: [ './picture.component.css' ]
})
export class PictureComponent implements OnInit {
	url: string;

	constructor() {
		this.url = 'https://i.giphy.com/media/12uXi1GXBibALC/giphy.webp';
		setTimeout(() => {
			this.url = 'https://i.giphy.com/media/l1L2UkgpuiE4U/giphy.webp';
		}, 3000);
	}

	ngOnInit() {}
}
