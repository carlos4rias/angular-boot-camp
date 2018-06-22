import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		NavBarComponent,
		DashboardComponent,
		EmployeesComponent,
		ProjectsComponent,
		EmployeeDetailComponent,
		ProjectDetailComponent,
		NotFoundComponent
	],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
