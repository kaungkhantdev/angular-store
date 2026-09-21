import { Component } from '@angular/core';
import { IconFieldModule} from 'primeng/iconfield';
import { InputTextModule} from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { Search } from '@primeicons/angular/search';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Paginator, PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  imports: [
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    Search,
    AvatarModule,
    TagModule,
    ButtonModule,
    PaginatorModule,
    Paginator,
  ],
  selector: 'app-store',
  styleUrl: './store.css',
  templateUrl: './store.html',
})
export class Store {
  items = [1, 2, 3, 4, 5, 6, 7, 8];

  first: number = 0;
  rows: number = 10;
  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }
}
