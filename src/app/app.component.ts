import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular12V';

  /**
   *
   */
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      console.log('event', event);

      if (event instanceof NavigationStart) {
        //do something on start activity
      }

      if (event instanceof NavigationError) {
        // Handle error
        console.error(event.error);
      }

      if (event instanceof NavigationEnd) {
        //do something on end activity
      }
    });
  }

  btnClick(message: string) {
    alert(message);
  }

  showSelect(value: string) {
    alert('seçilen : ' + value);
  }
}
