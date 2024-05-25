import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  loading: boolean = false;
  title = 'Typing Effect in Angular';
  typingStrings = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];
  currentString = '';
  typingSpeed = 100;
  currentStringIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;

  ngOnInit() {
    this.type();
  }
  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

  type() {
    const fullText = this.typingStrings[this.currentStringIndex];
    if (this.isDeleting) {
      this.currentCharIndex--;
      this.currentString = fullText.substring(0, this.currentCharIndex);
    } else {
      this.currentCharIndex++;
      this.currentString = fullText.substring(0, this.currentCharIndex);
    }

    if (!this.isDeleting && this.currentCharIndex === fullText.length) {
      setTimeout(() => this.isDeleting = true, 2000);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentStringIndex = (this.currentStringIndex + 1) % this.typingStrings.length;
    }

    setTimeout(() => this.type(), this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed);
  }
}
