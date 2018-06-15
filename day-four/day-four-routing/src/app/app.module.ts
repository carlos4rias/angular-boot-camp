import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [ AppComponent, LoginComponent, DashboardComponent, NotFoundComponent ],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path: '', component: LoginComponent },
			{ path: 'dashboard', component: DashboardComponent },
			{ path: '**', component: NotFoundComponent }
		])
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
