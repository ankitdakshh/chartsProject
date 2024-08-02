import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chart } from './state/chart.model';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private apiUrl = 'https://api.example.com/charts'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  getCharts(): Observable<Chart[]> {
    return of(this.generateRandomCharts());
  }

  private generateRandomCharts(): Chart[] {
    return [
      {
        id: '1',
        name: 'Chart 1',
        type: 'line',
        color: '#ff0000',
        data: this.generateRandomData(),
      },
      {
        id: '2',
        name: 'Chart 2',
        type: 'spline',
        color: '#00ff00',
        data: this.generateRandomData(),
      },
      {
        id: '3',
        name: 'Chart 3',
        type: 'area',
        color: '#0000ff',
        data: this.generateRandomData(),
      },
    ];
  }

  private generateRandomData(): { value: number; date: Date }[] {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        value: Math.floor(Math.random() * 100),
        date: new Date(2024, 0, i + 1),
      });
    }
    return data;
  }
}
