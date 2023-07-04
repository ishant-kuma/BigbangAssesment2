import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorService } from './doctor.service';
import { UserService } from './user.service';
import { ActivatedDoctorComponent } from './activated-doctor/activated-doctor.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { PatientService } from './patient.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    PatientComponent,
    DoctorComponent,
    ActivatedDoctorComponent,
    RegisterDoctorComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, ReactiveFormsModule,
    ToastrModule.forRoot()

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true}, ToastrService, DoctorService,UserService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
