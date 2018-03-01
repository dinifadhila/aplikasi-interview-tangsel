import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/Http";
import { FormsModule } from "@angular/forms";
import { RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, RouterModule.forRoot([
      { path : '', component : TestComponent },
      {path : 'signup', component : EmployeeComponent},
      {path : 'login', component : LoginComponent},
      
      
      
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
