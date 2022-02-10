import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-button', // page-component dışındaki componentlerimizin selector kısmını yazmak zorundayız
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // input ile component içerisine değer çekeriz
  @Input() btnName: string = 'Button';
  //Input ile buttonun propertylerini yazıyoruz
  @Input() btnClass: string = 'red';

  // c# daki evnetlere benzer
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  btnClick() {
    // output ile bir component içerisinden değer fırlatırız
    this.clicked.emit(this.btnName); // emit ile butonu tıklaynıc veri taşıma yapabiliriz
  }
}
