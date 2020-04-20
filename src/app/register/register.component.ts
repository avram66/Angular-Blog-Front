import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit , OnDestroy {
  public RegisterFormGroup;
  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    this.initForm();
  }
  private initForm() {
    this.RegisterFormGroup = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }
  ngOnDestroy(): void {
    document.body.classList.remove('bg-img');
  }

}
