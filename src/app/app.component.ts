import { Component } from '@angular/core';
import { SetComponent } from './set/set.component';

@Component({
  selector: 'app-root',
  imports: [SetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Scryview';
}
