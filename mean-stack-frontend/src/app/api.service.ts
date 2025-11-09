import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  _id?: string;
  name: string;
  description?: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.API_URL}/items`);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.API_URL}/items`, item);
  }
}
