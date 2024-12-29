import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {  PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, PanelMenuModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  items: any;

  constructor(private route: Router) { }
  ngOnInit() {
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

  expend: boolean = false;
  clickEvent() {
    this.expend = !this.expend;
  }

}
