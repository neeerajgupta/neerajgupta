import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NeerajGupta';
  items: any
  private isBrowser: boolean;




  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private router: Router) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home1',
        icon: 'pi pi-home',
        routerLink: '/',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'About',
        icon: 'pi pi-star',
        routerLink: '/about',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        route: '/tour',

      }
    ]
    if (this.isBrowser) {
      document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }
  }


  ngOnDestroy(): void {
    if (this.isBrowser) {
      document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }
  }



  setFavicon(url: string) {
    let link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  handleVisibilityChange(): void {
    if (document.visibilityState === 'visible') {
      document.title = 'Welcome to Neeraj Gupta Website';
      this.setFavicon('https://github.com/neeerajgupta/image/blob/main/portfolio.jpeg?raw=true');
    } else {
      document.title = 'Come Back To Our Website';
      this.setFavicon('https://github.com/neeerajgupta/image/blob/main/welcomeback.jpeg?raw=true');
    }
  }
}
