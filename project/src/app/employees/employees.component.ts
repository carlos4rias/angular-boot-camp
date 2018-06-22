import { Employee } from './../employee.interface';
import { DataManagerService } from './../data-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: [ './employees.component.css' ]
})
export class EmployeesComponent implements OnInit {
	employees: Employee[];
	constructor(private dataManagerService: DataManagerService) {}

	ngOnInit() {
		this.dataManagerService.getData<Employee[]>('employees').subscribe((data) => (this.employees = data));
	}
}
