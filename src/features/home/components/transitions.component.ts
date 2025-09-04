import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"; // Required for ngModel
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'home-transition',
    standalone: true,
    imports: [TableModule, TagModule, RatingModule, ButtonModule, CommonModule, FormsModule],
    template: `
        <div class="">
            <p-table [value]="products" [tableStyle]="{ 'min-width': '60rem' }">
                <ng-template pTemplate="caption">
                    <div class="flex items-center justify-between">
                        <div class="">
                            <p class="text-xl font-bold">Transitions</p>
                            <span class="text-sm">You had 2 incomes and 23 expenses in this month.</span>
                        </div>
                    </div>
                </ng-template>
                <ng-template pTemplate="header">
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Reviews</th>
                        <th>Status</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-product>
                    <tr>
                        <td>{{ product.name }}</td>
                        <td>
                            <img
                                [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                                [alt]="product.name"
                                class="w-24 rounded"
                            />
                        </td>
                        <td>{{ product.price | currency: 'USD' }}</td>
                        <td>{{ product.category }}</td>
                        <td><p-rating [(ngModel)]="product.rating" [readonly]="true" /></td>
                        <td>
                            <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
                        </td>
                    </tr>
                </ng-template>
                <ng-template pTemplate="footer">
                    <tr>
                        <td colspan="6">In total there are {{ products ? products.length : 0 }} products.</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `
})
export class HomeTransitionComponent implements OnInit {
    products!: any[];

    ngOnInit() {
        this.products = [
            { id: '1000', code: 'f230fh0g3', name: 'Bamboo Watch', description: 'Product Description', image: 'bamboo-watch.jpg', price: 65, category: 'Accessories', quantity: 24, inventoryStatus: 'INSTOCK', rating: 5 },
            { id: '1001', code: 'nvklal43', name: 'Black Watch', description: 'Product Description', image: 'black-watch.jpg', price: 72, category: 'Accessories', quantity: 61, inventoryStatus: 'INSTOCK', rating: 4 },
            { id: '1002', code: 'zz21l8j4t', name: 'Blue Band', description: 'Product Description', image: 'blue-band.jpg', price: 79, category: 'Fitness', quantity: 2, inventoryStatus: 'LOWSTOCK', rating: 3 },
            { id: '1003', code: '244wgerg2', name: 'Blue T-Shirt', description: 'Product Description', image: 'blue-t-shirt.jpg', price: 12, category: 'Clothing', quantity: 25, inventoryStatus: 'INSTOCK', rating: 5 },
            { id: '1004', code: 'h456wer5f', name: 'Brown Purse', description: 'Product Description', image: 'brown-purse.jpg', price: 120, category: 'Accessories', quantity: 0, inventoryStatus: 'OUTOFSTOCK', rating: 4 },
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'danger';
        }
    }
}
