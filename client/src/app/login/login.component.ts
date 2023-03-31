import { BackendService } from './../backend.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('f') signupForm!: NgForm;

  visible: boolean = true;
  changeType: boolean = true;

  email!: string;
  password!: string;

  constructor(private backendService: BackendService, private router: Router) {}

  onSubmit() {
    console.log(this.signupForm);
    this.email = this.signupForm.value.userData.email;
    this.password = this.signupForm.value.userData.password;
    console.log(this.email, this.password);

    this.backendService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('response from beckend', response);
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/encoder']);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.signupForm.reset();
  }

  viewPassword() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }
}
