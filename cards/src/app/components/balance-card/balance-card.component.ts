import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {
  @Input() availableBalance: string = '';
  @Input() currentAccountBalance: string = '';
  @Input() currentAccountLinkedBalance: string = '';
  @Input() investmentsAutomaticLow : string = '';
  @Input() investmentsWithoutAutomaticLow : string = '';
  @Input() totalBalance: string = '';
  @Input() freeToMove: string = '';

  title: string = 'Saldos Disponíveis';
}
 