import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {
	transform(name: string): string {
		return name.slice(0, 5);
	}
}
