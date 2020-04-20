import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit , OnDestroy {
  public  LogInFormGroup;
  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    this.initForm();
  }
  private initForm() {
    this.LogInFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit(): void {

}
  ngOnDestroy(): void {

    document.body.classList.remove('bg-img');
  }

}
