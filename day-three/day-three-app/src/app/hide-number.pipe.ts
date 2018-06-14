import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'hideNumber'
})
export class HideNumberPipe implements PipeTransform {
	transform(cardNumber: string): string {
		let begin = cardNumber.length - 5;
		let end = cardNumber.length;
		return '****.****.****' + cardNumber.slice(begin, end);
	}
}
