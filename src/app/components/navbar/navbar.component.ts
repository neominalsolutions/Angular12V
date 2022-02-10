import { Navbar } from './navbar.model';
import { Component, Input, OnInit } from '@angular/core';

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
      path: 'todos',
      name: 'Yapılacaklar',
      active: false,
    },
    {
      path: 'about',
      name: 'Hakkımızda',
      active: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
