import { Project } from './project.interface';

export class Employee {
	constructor(
		public id: number,
		public name: string,
		public company: string,
		public age: number,
		public birthday: string,
		public favcolor: string,
		public project: Project
	) {}
}
