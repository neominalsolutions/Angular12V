import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dropdown } from './dropdown.model';

@Component({
  selector: 'my-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() items: Dropdown[] = [];
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onDropdownChanged(event: any) {
    console.log('event', event);

    this.changed.emit(
      this.items.find((x) => x.value == event.target.value)?.text
    );
  }
}
