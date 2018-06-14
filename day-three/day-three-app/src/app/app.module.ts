import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HideNumberPipe } from './hide-number.pipe';
import { ShortNamePipe } from './short-name.pipe';

@NgModule({
	declarations: [ AppComponent, ButtonComponent, HideNumberPipe, ShortNamePipe ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
