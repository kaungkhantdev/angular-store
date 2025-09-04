import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-layout',
    imports: [HeaderComponent],
    template: `
        <div class="max-w-7xl mx-auto px-6 py-8">
            <app-header></app-header>
            <ng-content></ng-content>
        </div>
    `,
})
export class LayoutComponent {}