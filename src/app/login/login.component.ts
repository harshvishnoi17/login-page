import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';
import { NgHttpLoaderModule, Spinkit } from 'ng-http-loader';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  public spinkit = Spinkit; 

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private authService: AuthService, 
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }


  _v() {
    return this.loginForm.value;
  }

  get getControls() {
    return this.loginForm.controls;
  }

  goToRegisterPage() {
    this.router.navigate(['/app-signup'])
  }

  onSubmit(): void {

    this.submitted =  true;
    this.errorMessage = "";
    console.log(this.loginForm.valid);
    if(this.loginForm.valid) {
      const { email, password } = this._v();
      this.authService.login(email, password).subscribe({
        next: loginData => {

          this.storageService.saveTokens(loginData.access_token, loginData.refresh_token);

          this.authService.getUserFromToken(loginData.access_token).subscribe({
            next: userProfileData => {
              console.log(userProfileData);
              this.storageService.saveUser(userProfileData);
    
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.roles = this.storageService.getUser().role;
              // this.reloadPage();
              this.router.navigate(['/home']);
            },
            error: err => {
              this.errorMessage = err.error.message;
              this.isLoginFailed = true;
            }
          });
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
