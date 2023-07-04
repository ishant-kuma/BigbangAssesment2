import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControlName } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent {

  doctorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService
  ) {
    this.doctorForm = this.formBuilder.group({
      name: ['', Validators.required],
      specialty: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      isActive: [false]
    });
  }

  addDoctor(): void {
    if (this.doctorForm.invalid) {
      return;
    }

    this.doctorService.addDoctor(this.doctorForm.value).subscribe((doctor) => {
      // Reset the form after adding the doctor
      this.doctorForm.reset();
      this.doctorForm.patchValue({ isActive: false });
    });
  }
}
