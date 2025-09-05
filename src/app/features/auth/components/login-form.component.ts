import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'login-form',
  imports: [
    InputTextModule, 
    PasswordModule, 
    FormsModule, 
    CheckboxModule, 
    ButtonModule, 
    ReactiveFormsModule
  ],
  standalone: true,
  template: `
    <div class="flex items-center justify-center h-screen">
        <div class="w-full max-w-md p-8 shadow rounded-lg">
            <div class="mb-8">
                <h2 class="text-3xl font-bold text-slate-900 login-title">Login</h2>
                <p class="mt-2 text-slate-600 welcome-text">Hi, Welcome back 👋</p>
            </div>
            <div>
                <form [formGroup]="loginForm" (ngSubmit)="onLogin()">
                    <div class="mb-4">
                        <label for="username" class="block mb-2 text-sm font-medium text-slate-700">Username</label>
                        <input id="username" type="text" pInputText class="w-full" placeholder="Ex: johndoe" formControlName="username"/>
                        @if (loginForm.get('username')?.invalid && loginForm.get('username')?.touched) {
                        <small class="block mt-1 text-xs font-medium text-red-500 p-error">
                            Please enter a valid username
                        </small>
                        }
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block mb-2 text-sm font-medium text-slate-700">Password</label>
                        <p-password 
                            id="password"
                            inputStyleClass="w-full"
                            class="w-full"
                            placeholder="Enter your password"
                            [toggleMask]="true"
                            formControlName="password"/>
                        @if (loginForm.get('password')?.invalid && loginForm.get('password')?.touched) {
                        <small class="block mt-1 text-xs font-medium text-red-500 p-error">
                            Password must be at least 6 characters long
                        </small>
                        }
                    </div>
                    <div class="mb-4">
                        <div class="flex items-center gap-2">
                            <p-checkbox formControlName="rememberMe" inputId="remember" binary="true" />
                            <label for="remember">Remember Me</label>
                        </div>
                    </div>
                    <p-button label="Submit" styleClass="w-full mt-4" type="submit" [disabled]="loginForm.invalid" />
                </form>
            </div>
        </div>
    </div>
  `,
})
export class LoginFromComponent {
    private apiService = inject(ApiService)
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rememberMe: [false]
        });
    }

    async onLogin() {
        if (this.loginForm.valid) {
            console.log('Login form data:', this.loginForm.value);
            
            const data = {
                username: this.loginForm.value.username,
                password: this.loginForm.value.password
            }
            
            // Subscribe to the Observable to get the data
            this.apiService.post('/auth/login', data).subscribe({
              next: (result) => {
                console.log('Login successful:', result);
                // Handle the successful login here (e.g., navigate to a new page)
              },
              error: (err) => {
                console.error('Login failed:', err);
                // Handle the login error here (e.g., show an error message)
              }
            });
        }
    }
}