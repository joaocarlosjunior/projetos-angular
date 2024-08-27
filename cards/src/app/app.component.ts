import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  availableBalance: string = '1000';
  currentAccountBalance: string = '200';
  currentAccountLinkedBalance: string = '300';
  investmentsAutomaticLow : string = '400';
  investmentsWithoutAutomaticLow : string = '200';
  totalBalance: string = '3000';
  freeToMove: string = '2100';
}
