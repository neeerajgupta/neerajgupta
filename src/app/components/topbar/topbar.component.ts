import { Component, OnInit } from '@angular/core';
import { PhoteSrvicescesService } from '../../services/phote-srvicesces.service';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [CarouselModule, CommonModule, FormsModule, HttpClientModule, TagModule,TooltipModule, InputTextModule,InputIconModule,IconFieldModule,FloatLabelModule,InputTextareaModule],
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    providers: [PhoteSrvicescesService]
})
export class TopbarComponent implements OnInit {
    photos: any | undefined;
   

    responsiveOptions: any[] | undefined;




    private strings: string[] = ["Ui Developer", "Full Stack Developer", "Graphics Designer", "Web Designer", "Web Developer","Animation Developer"];
    private currentIndex: number = 0;
    private currentString: string = '';
    private typingSpeed: number = 100;
    private deletingSpeed: number = 40;
    private isDeleting: boolean = false;



    constructor(private photeSrvicesces: PhoteSrvicescesService) { }

    ngOnInit() {
        this.photeSrvicesces.photeSrvicescesData().subscribe(
            resp => {
                console.log("Response from service:", resp.data);
                this.photos = Array.isArray(resp.data) ? resp.data : [];
            },
            error => {
                console.error("Error fetching photos:", error);
                this.photos = []; // Handle error gracefully
            }
        );
        this.type();
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(Distic: string) {
        switch (Distic) {
            case 'Nasik':
                return 'success';
            case 'Maharastra':
                return 'warning';
            case 'Bandra':
                return 'danger';
            case 'Ambernath':
                return 'success';
            default:
                return 'secondary';
        }
    }

    private type(): void {
        const fullString = this.strings[this.currentIndex];
    
        if (this.isDeleting) {
          this.currentString = fullString.substring(0, this.currentString.length - 1);
        } else {
          this.currentString = fullString.substring(0, this.currentString.length + 1);
        }
    
        const displayElement = document.querySelector('.position') as HTMLElement;
        if (displayElement) {
          displayElement.textContent = this.currentString;
        }
    
        // Determine typing speed
        let speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    
        // If the full string is typed, start deleting after a pause
        if (!this.isDeleting && this.currentString === fullString) {
          speed = 1000; // Pause before starting to delete
          this.isDeleting = true;
        } else if (this.isDeleting && this.currentString === '') {
          this.isDeleting = false;
          this.currentIndex = (this.currentIndex + 1) % this.strings.length; 
        }
    
        setTimeout(() => this.type(), speed);
      }

}
