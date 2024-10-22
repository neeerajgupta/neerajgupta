import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FeviconService } from './services/fevicon.service';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AboutComponent } from "./components/about/about.component";
import { TourComponent } from "./components/tour/tour.component";
import { GalleriaModule, GalleriaResponsiveOptions } from 'primeng/galleria';
import { PhotoService } from './interface/PhotoService';

import { CardModule } from 'primeng/card';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AvatarModule, AvatarGroupModule, MenubarModule, AboutComponent, TourComponent
      ,GalleriaModule,
      CardModule,
    ],
    providers: [PhotoService],
})
export class AppComponent {
  title = 'neerajgupta';
  private isBrowser: boolean;

  items: MenuItem[] | undefined;
responsiveOptions: GalleriaResponsiveOptions[]|undefined;
images: any[] = [];
 

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private faviconService: FeviconService,
private photoService:PhotoService) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.photoService.getImages().then((images: any) => {
      this.images = images; // Bind the fetched images to the images property
    });
    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
      },
      {
        label: 'About',
        icon: 'pi pi-star',
        route: '/about'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        route: '/tour',
        items: [
          {
            label: 'Smart',
            icon: 'pi pi-bolt'
          },
          {
            label: 'FDS',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Skills',
        icon: 'pi pi-spin pi-cog',
        route: '/skills'
      },
      {
        label: 'Experience',
        icon: 'pi pi-user-edit',
        route: '/Experience'
      },
      {
        label: 'Contact',
        icon: 'pi pi-phone',
        route: '/Contact'
      },
    ]
    if (this.isBrowser) {
      document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Section ${sectionId} not found`);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }
  }

  handleVisibilityChange(): void {
    if (document.visibilityState === 'visible') {
      document.title = 'Welcome to Neeraj Gupta Website';
      this.faviconService.setFavicon('assets/images/favicon.png');
    } else {
      document.title = 'Come Back To Our Website';
      this.faviconService.setFavicon('assets/images/favhand.png');
    }
  }

}
