import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SelectModule } from "primeng/select";

interface Year {
  name: string;
  code: string;
}

@Component({
  selector: 'home-summary',
  standalone: true,
  imports: [SelectModule, FormsModule],
  template: `
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold text-gray-900">Summary</h1>
      <p-select
        [options]="years"
        [(ngModel)]="selectedThings"
        optionLabel="name"
        optionValue="code"  placeholder="Select a Year"
        class="max:w-56"/>
    </div>
  `
})
export class HomeSummaryComponent {
  years: Year[] = [
    { name: '2023', code: '2023' },
    { name: '2024', code: '2024' },
    { name: '2025', code: '2025' }
  ];

  // ✅ FIX 2: Correctly type and initialize the model as a string
  selectedThings: string = this.years[0].code;
}