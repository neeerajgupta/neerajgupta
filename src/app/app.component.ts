import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
import { TopbarComponent } from "./components/topbar/topbar.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, TopbarComponent, SkillsComponent,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NeerajGupta';
  private isBrowser: boolean;




  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private router: Router) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(): void {
   
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


  showButton = false; // Initially hide the button
  opacity: number = 1;
 

  @HostListener('window:scroll', [])
  onWindowScroll() {
 
    this.showButton = window.scrollY > 100;
  }
  smoothScrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 70;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
  

}
