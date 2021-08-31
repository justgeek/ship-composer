import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  styleUrls: ['./dialog.component.scss'],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  @Input() title!: string;

  public isDialogShown = false;

  showDialog() {
    this.isDialogShown = true;
  }
  closeDialog() {
    this.isDialogShown = false;
  }
}
