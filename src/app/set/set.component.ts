import { Component } from '@angular/core';
import { SetService } from '../set.service';

@Component({
  selector: 'app-set',
  imports: [],
  templateUrl: './set.component.html',
  styleUrl: './set.component.css'
})
export class SetComponent {
  constructor(private setService: SetService) {}

  ngOnInit() {
    this.setService.getSets('standard', true).subscribe((data: object) => {
      console.log(data);
    });
  }
}
