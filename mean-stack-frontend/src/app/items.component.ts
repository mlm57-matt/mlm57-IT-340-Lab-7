import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Item } from './api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.api.getItems().subscribe({
      next: (data) => (this.items = data),
      error: (err) => console.error('Error fetching items:', err),
    });
  }

  addItem() {
    const newItem: Item = { name: 'New Item', price: 0 };
    this.api.addItem(newItem).subscribe({
      next: (item) => this.items.push(item),
      error: (err) => console.error('Error adding item:', err),
    });
  }
}
