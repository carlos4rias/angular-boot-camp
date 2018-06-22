import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'employees', component: EmployeesComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'employee/:id', component: EmployeeDetailComponent },
	{ path: 'project/:id', component: ProjectDetailComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
