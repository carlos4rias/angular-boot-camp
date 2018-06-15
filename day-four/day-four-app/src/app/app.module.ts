import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostService } from './posts.service';
import { UserComponent } from './user/user.component';

@NgModule({
	declarations: [ AppComponent, UserComponent ],
	imports: [ BrowserModule, HttpClientModule, FormsModule ],
	providers: [ PostService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
