import { DataManagerService } from './../data-manager.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project.interface';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: [ './projects.component.css' ]
})
export class ProjectsComponent implements OnInit {
	projects: Project[];
	constructor(private dataManagerService: DataManagerService) {}

	ngOnInit() {
		this.dataManagerService.getData<Project[]>('projects').subscribe((data) => (this.projects = data));
	}

	getNumberOfEmployees(idx: number): number {
		return this.projects[idx].employess.length;
	}
}
