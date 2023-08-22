import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HomeComponent } from './home/home.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { InterviewComponent } from './interview/interview.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'signup', component:SignUPComponent},
  { path:'dashboard', component:EmployeeDashboardComponent},
  { path: 'interview', component:InterviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent,
                                    EmployeeDashboardComponent,
                                    SignUPComponent,
                                    InterviewComponent

                                  ]
