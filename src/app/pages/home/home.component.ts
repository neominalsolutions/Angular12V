import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-home', eğer bir component page component ise route ile gelinir bu sebeple selector ihtiyacı yok
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// sayfa componentlerine  input output tanımlanmaz. routing module altında bir path bulunur ve selector kısımlarında ismi olmaz. sadece router üzerinde çağırılır.page componentler export da olmaz
