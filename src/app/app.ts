import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Faq } from './faq/faq';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Faq],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('faq-app');
}
