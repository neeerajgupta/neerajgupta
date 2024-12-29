import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  items:any
  ngOnInit(): void {
    this.items = [
      {
        label: 'Header',
        icon: 'pi pi-home',
        routerLink: '/welcome',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Sidebar',
        icon: 'pi pi-star',
        routerLink: '/sidebar',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        route: '/tour',

      }
    ]
  }

}
