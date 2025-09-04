import { Component } from "@angular/core";
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'home-cards',
    imports: [ProgressBarModule, TooltipModule],
    template: `
    <!-- Net Total Card -->
    <div class="bg-white rounded-xl my-10">
        <div>
            <p class="text-sm mb-1">Net Total</p>
            
            <div class="lg:flex items-baseline justify-between gap-4">
                <div class="flex items-baseline gap-2">
                    <h2 class="text-3xl font-bold text-gray-900 mb-1">218.493,21€</h2>
                    <p class="text-red-500 text-sm">-1,3% from last year</p>
                </div>
                <div class="flex lg:w-3/5 rounded">
                    <p-progressBar 
                        pTooltip="Expenses 73%"
                        [value]="100" 
                        [showValue]="false" 
                        color="#ff0000"
                        [style]="{ flex: 73, height: '8px' }">
                    </p-progressBar>

                    <p-progressBar 
                        [value]="100" 
                        [showValue]="false" 
                        color="purple"
                        [style]="{ flex: 20, height: '8px' }">
                    </p-progressBar>

                    <p-progressBar 
                        [value]="100" 
                        [showValue]="false" 
                        color="gold"
                        [style]="{ flex: 30, height: '8px' }">
                    </p-progressBar>
                </div>
            </div>
        </div>
    </div>

    <!-- Financial Summary Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <!-- Income -->
        <div class="bg-white rounded-xl">
            <div class="flex items-center justify-between mb-4">
                <span class="text-green-600 text-sm font-medium">Income</span>
                <span class="text-gray-400 text-sm">27%</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">135.780,47€</h3>
            <p class="text-green-500 text-sm flex items-center">
                <i class="fas fa-arrow-up mr-1"></i>
                13% vs last year
            </p>
        </div>

        <!-- Expenses -->
        <div class="bg-white rounded-xl">
            <div class="flex items-center justify-between mb-4">
                <span class="text-red-600 text-sm font-medium">Expenses</span>
                <span class="text-gray-400 text-sm">73%</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">87.600,34€</h3>
            <p class="text-green-500 text-sm flex items-center">
                <i class="fas fa-arrow-up mr-1"></i>
                +4% vs last year
            </p>
        </div>

        <!-- Investment -->
        <div class="bg-white rounded-xl">
            <div class="flex items-center justify-between mb-4">
                <span class="text-blue-600 text-sm font-medium">Investment</span>
                <span class="text-gray-400 text-sm">21%</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">48.500,00€</h3>
            <p class="text-red-500 text-sm flex items-center">
                <i class="fas fa-arrow-down mr-1"></i>
                -8% vs last year
            </p>
        </div>

        <!-- Savings -->
        <div class="bg-white rounded-xl">
            <div class="flex items-center justify-between mb-4">
                <span class="text-yellow-600 text-sm font-medium">Savings</span>
                <span class="text-gray-400 text-sm">6%</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">23.435,00€</h3>
            <p class="text-green-500 text-sm flex items-center">
                <i class="fas fa-arrow-up mr-1"></i>
                3% vs last year
            </p>
        </div>
    </div>
    `,
})
export class HomeCardsComponent {}