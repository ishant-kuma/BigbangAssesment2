import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class PatientComponent {
  patientForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService
  ) {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      medicalCondition: ['', Validators.required],
      doctorId: ['', Validators.required],
    });
  }

  addPatient(): void {
    if (this.patientForm.invalid) {
      return;
    }

    this.patientService.addPatient(this.patientForm.value).subscribe((patient) => {
      // Reset the form after adding the patient
      this.patientForm.reset();
    });
  }
}
