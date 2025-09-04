import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-layout',
    imports: [HeaderComponent, RouterOutlet],
    template: `
        <div class="max-w-7xl mx-auto px-6 py-8">
            <app-header></app-header>
            <router-outlet />
        </div>
    `,
})
export class LayoutComponent {}