import { Employee } from './employee.interface';
export class Project {
	constructor(public id: number, public name: string, public client: string, public employess: Employee[]) {}
}
