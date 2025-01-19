import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule,BadgeModule,DialogModule, AvatarModule, InputTextModule,IconFieldModule,InputIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  visible: boolean = false;

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
        label: 'Dashbord',
        icon: 'pi pi-star',
        routerLink: '/topbar',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        route: '/tour',

      }
    ]
  }


  showDialog() {
      this.visible = !this.visible;
      console.log(this.visible)
  }


}
