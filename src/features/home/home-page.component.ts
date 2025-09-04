import { Component } from "@angular/core";
import { HomeSummaryComponent } from "./components/summary.component";
import { HomeCardsComponent } from "./components/cards.component";
import { HomeTransitionComponent } from "./components/transitions.component";

@Component({
    selector: 'home-page',
    imports: [HomeSummaryComponent, HomeCardsComponent, HomeTransitionComponent],
    template: `
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-6 py-8">
        <!-- Summary Section -->
        <home-summary />
        <home-cards />

        <!-- Transactions Section -->
        <home-transition />
    </main>
    `,
})
export class HomePageComponent {}