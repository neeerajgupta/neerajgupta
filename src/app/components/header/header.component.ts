import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from "../about/about.component";
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ButtonModule, AboutComponent]
})
export class HeaderComponent implements OnInit {
  loading: boolean = false;
  title = 'Fullstack Developer';
  typingStrings = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];
 
  constructor(private router: Router) {}
  ngOnInit() {
   
  }
  navigateToAbout() {
    this.router.navigate(['/about']);
    window.scrollTo(0, 0);
  }
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

}
