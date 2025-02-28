import { Component, computed, effect, inject, signal } from '@angular/core';
import { SetService } from '../set.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { filter, map, tap } from 'rxjs';
import { CardSet } from '../cardsetresponse';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set',
  imports: [FormsModule],
  templateUrl: './set.component.html',
  styleUrl: './set.component.css'
})
export class SetComponent {
  #setService = inject(SetService);
  setType = signal('expansion');

  allCardSets = rxResource({
    loader: () => this.#setService.getSets()
      .pipe(
        tap((cardSets: CardSet[]) => console.log(cardSets)),
        map(cardSets => cardSets.sort((a, b) => a.name.localeCompare(b.name))),
        tap((cardSets: CardSet[]) => console.log(cardSets))
      )
  });

  filteredCardSets = computed(() => {
    return this.allCardSets.value()?.filter(cardSet => cardSet.set_type == this.setType()) ?? []
  });

  setTypes = computed(() => {
    return [...new Set(this.allCardSets.value()?.map((s) => s.set_type))]
  });

  constructor() {
    effect(() => {
      console.log(`setTypes: ${this.setTypes()}`);
    });
  }

  protected readonly filter = filter;
}
