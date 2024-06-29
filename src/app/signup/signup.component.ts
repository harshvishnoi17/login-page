import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] 
})


export class SignupComponent {

  signupForm: FormGroup;
  errorMessage = '';
  roles: string[] = [];
  loading = false;
  submitted = false;

  isSignupFailed = false;

  constructor(private authService: AuthService, 
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private router: Router) {}

    ngOnInit(): void {
  
      this.signupForm = this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        avatar: new FormControl('', [Validators.required])
      });
    }

  _v() {
    return this.signupForm.value;
  }

  get getControls() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted =  true;
    this.errorMessage = "";
    console.log(this.signupForm.value);
    if(this.signupForm.valid) {
      const { name, email, password, avatar } = this._v();
      this.authService.register(name, email, password, avatar).subscribe({
        next: signupData => {
            console.log(signupData);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignupFailed = true;
        }
      });
    }
  }
}
