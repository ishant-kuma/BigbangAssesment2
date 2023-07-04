import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => this.doctors = doctors);
  }

  updateDoctor(doctor: Doctor): void {
    this.doctorService.updateDoctor(doctor)
      .subscribe();
  }

  deleteDoctor(id: number): void {
    this.doctorService.deleteDoctor(id)
      .subscribe(() => {
        this.doctors = this.doctors.filter(d => d.doctorId !== id);
      });
  }
  ChangeStatus(id: number){
    this.doctorService.changestatus(id).subscribe((data)=>{
      console.log(data)
      this.ngOnInit()
    })
  }
}
