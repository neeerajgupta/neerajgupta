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

  constructor(private router: Router) { }
  ngOnInit() {
    this.items = [
      {
        label: 'Header',
        icon: 'pi pi-home',
        routerLink: '/welcome',
        routerLinkActiveOptions: { exact: true },
        command: () => this.smoothScrollTo('topbar') 
      },
      {
        label: 'Dashbord',
        icon: 'pi pi-star',
        routerLink: '/topbar',
        routerLinkActiveOptions: { exact: true },
        command: () => this.smoothScrollTo('topbar') 
      },
      {
        label: 'Skills',
        icon: 'pi pi-graduation-cap',
        routerLink: '/skills',
        routerLinkActiveOptions: { exact: true },
        command: () => this.smoothScrollTo('skills') 

      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        routerLink: '/tour',

      }
    ]
  }

  expend: boolean = false;
  clickEvent() {
    this.expend = !this.expend;
  }

  

  smoothScrollTo(elementId: string) {
    this.router.navigate([`/${elementId}`]).then(() => {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 70;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' 
          });
        }
      }, 0);
    });
  }
  

}
