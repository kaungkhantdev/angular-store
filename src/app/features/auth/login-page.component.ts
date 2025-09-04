import { Component } from "@angular/core";
import { LoginFromComponent } from "./components/login-form.component";

@Component({
    selector: 'login-page',
    imports: [LoginFromComponent],
    template: `
    <login-form />
    `,
})
export class LoginPageComponent {}