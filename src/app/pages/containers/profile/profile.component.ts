import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  firstFormGroup?: FormGroup;
  secondFormGroup?: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstName: ['Shuma', Validators.required],
      lastName: ['Shinozaki', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }
}
