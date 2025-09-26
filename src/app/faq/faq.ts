import { Component } from '@angular/core';
import { ListItem } from '../list-item/list-item';

@Component({
  selector: 'app-faq',
  imports: [ListItem],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {}
