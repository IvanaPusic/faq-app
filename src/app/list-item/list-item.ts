import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.html',
  styleUrl: './list-item.scss',
})
export class ListItem {
  title = input.required();
  text = input.required();
  checked = signal(false);

  checkListItem() {
    this.checked.set(!this.checked());
    console.log(this.checked());
  }
}
