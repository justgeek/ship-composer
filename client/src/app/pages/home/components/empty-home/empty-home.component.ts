import { Component, Input } from '@angular/core';

@Component({
  selector: 'empty-home',
  styleUrls: ['./empty-home.component.scss'],
  templateUrl: './empty-home.component.html',
})
export class EmptyHomeComponent {
  @Input() action!: () => void;
}
