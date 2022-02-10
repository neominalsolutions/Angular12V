import { Navbar } from './navbar.model';
import { Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() menuItems: Navbar[] = [
    {
      path: '/',
      name: 'Anasayfa',
      active: true,
    },
    {
      path: '/todos',
      name: 'Yapılacaklar',
      active: false,
    },
    {
      path: '/about',
      name: 'Hakkımızda',
      active: false,
    },
  ];

  constructor(private router: Router) {
    // router service angularda routing işlemlerinden sorumlu service
    // router içerisinde route değişikliğinde angular tarafından fırlatılan eventleri takip et. eventleri dinle
    this.router.events.subscribe((event) => {
      // route isteği başladığında yani sayfaya route isteği geldi sayfa açılmadı
      if (event instanceof NavigationStart) {
        //do something on start activity
      }

      // routing dosyasında tanımlı component yoksa
      if (event instanceof NavigationError) {
        // Handle error
        console.error(event.error);
      }

      // sayfa açıldığında çalışır
      if (event instanceof NavigationEnd) {
        console.log('event', event);
        //do something on end activity
        this.menuItems.forEach((menuItem) => {
          menuItem.active = false;
        });
        const menuItem = this.menuItems.find(
          (x) => x.path == event.url
        ) as Navbar;
        menuItem.active = true;
      }
    });
  }

  ngOnInit(): void {}
}
