import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input({ required:true }) text: string = ''
  @Input({ required:true }) value: string = ''
}
