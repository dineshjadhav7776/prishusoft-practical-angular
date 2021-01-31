import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;
  // errorMessage: string;
  validationMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = false;
      return;
    }
    else {
      this.authService.login(this.loginForm.value).subscribe((data: any) => {
        if (data.success == true) {
          alert('Login success');
          localStorage.setItem('adminToken', data.auth_token);
          this.router.navigate(['/all-organizations']);
        } else {
          alert('email or password does not match, Please try again');
        }
      }, (error: HttpErrorResponse) => {
        this.submitted = false;
        alert('email or password does not match, Please try again');
        if (error.status === 0) {
          this.submitted = false;
          // this.errorMessage = "Cannot connect to server. Please try again.";
        }
      });
    }

  }

}
