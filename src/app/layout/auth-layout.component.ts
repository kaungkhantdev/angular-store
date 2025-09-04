import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'auth-layout',
    imports: [RouterOutlet],
    template: `
        <div class="max-w-7xl mx-auto">
            <router-outlet />
        </div>
    `,
})
export class AuthLayoutComponent {}