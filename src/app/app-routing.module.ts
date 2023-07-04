import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './gaurd/auth.guard';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { ActivatedDoctorComponent } from './activated-doctor/activated-doctor.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';

const routes: Routes = [
{path:'', redirectTo:'/login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'doctor', component:DoctorComponent},
{path:'patient', component:PatientComponent},
{path:'activated-doctor', component:ActivatedDoctorComponent},
{path:'register-doctor', component:RegisterDoctorComponent},
{path:'home', component:HomeComponent, canActivate:[AuthGuard]}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
