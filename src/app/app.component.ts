import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular12V';

  btnClick(message: string) {
    alert(message);
  }

  showSelect(value: string) {
    alert('seçilen : ' + value);
  }
}
