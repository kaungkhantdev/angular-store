import { Component } from "@angular/core";
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'app-header',
    template: `
     <!-- Header -->
    <header class="bg-white">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center space-x-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center">
                     <i class="pi pi-crown" style="font-size: 1.5rem"></i>
                </div>
            </div>
            
            <!-- Navigation -->
            <nav class="flex items-center space-x-8">
                <a href="#" class="flex items-center space-x-2 text-gray-900 font-medium">
                    <i class="pi pi-home"></i>
                    <span>Home</span>
                </a>
                <a href="#" class="flex items-center space-x-2 text-gray-500">
                    <i class="pi pi-wallet"></i>
                    <span>Cashflow</span>
                </a>
                <a href="#" class="flex items-center space-x-2 text-gray-500">
                    <i class="pi pi-chart-bar"></i>
                    <span>Net Worth</span>
                </a>
            </nav>
            
            <!-- Profile -->
            <div class="flex items-center justify-center">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" shape="circle" />
            </div>
        </div>
    </header>
    `,
    imports: [AvatarModule]
})
export class HeaderComponent {}