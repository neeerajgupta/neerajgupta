import { Component, OnInit } from '@angular/core';
import { PhoteSrvicescesService } from '../../services/phote-srvicesces.service';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

import AOS from 'aos';
// import 'aos/dist/aos.css';
import { MessageService } from 'primeng/api';
import { apServices } from '../../services/apServices.service';
import { ToastModule } from 'primeng/toast';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserlistComponent } from '../userlist/userlist.component';
@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [CarouselModule, CommonModule, FormsModule, HttpClientModule, TagModule, TooltipModule, InputTextModule, InputIconModule, IconFieldModule, FloatLabelModule, InputTextareaModule, ButtonModule, ReactiveFormsModule, ToastModule, UserlistComponent],
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    providers: [PhoteSrvicescesService, MessageService, DialogService, apServices]
})
export class TopbarComponent implements OnInit {
    photos: any | undefined;


    responsiveOptions: any[] | undefined;







    private strings: string[] = ["Ui Developer", "Full Stack Developer", "Graphics Designer", "Web Designer", "Web Developer", "Animation Developer"];
    private currentIndex: number = 0;
    private currentString: string = '';
    private typingSpeed: number = 100;
    private deletingSpeed: number = 40;
    private isDeleting: boolean = false;


    myForm: FormGroup;
    sentMails: any[] = [];
    private localStorageKey = 'sentMailList';

    constructor(public dialogService: DialogService, private messageservice: MessageService, private apiservice: apServices, private photeSrvicesces: PhoteSrvicescesService, private fb: FormBuilder, private http: HttpClient) {
        this.myForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            msg: [''],
        });
    }

    ngOnInit() {
        this.loadSentMails();

        AOS.init({
            duration: 1000, // Animation duration
        });
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

    private loadSentMails(): void {
        const stored = localStorage.getItem(this.localStorageKey);
        if (stored) {
            try {
                this.sentMails = JSON.parse(stored);
            } catch (error) {
                console.error('Failed to parse sent mail list from localStorage', error);
                this.sentMails = [];
            }
        }
    }

    private saveSentMails(): void {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.sentMails));
    }

    onSubmit() {
        if (this.myForm.valid) {
            const formData = this.myForm.value;
            const payload = {
                id: Date.now(),
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                msg: formData.msg
            };

            this.sentMails.unshift(payload);
            this.saveSentMails();

            const recipient = 'soft.guptaneeraj@gmail.com';
            const subject = 'corp';
            const body = `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nMessage: ${payload.msg}\n\n\n\n\n\n\nBest Regards,\n${payload.name}`;
            window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            this.messageservice.add({ severity: 'success', summary: 'Ready', detail: 'Email client opened' });

            // If you have a backend API that sends email automatically, call that instead:
            // this.apiservice.saveData(payload).subscribe({
            //     next: (response) => {
            //         this.messageservice.add({ severity: 'success', summary: 'Success', detail: 'Mail sent successfully' });
            //     },
            //     error: (error) => {
            //         this.messageservice.add({ severity: 'error', summary: 'Error', detail: 'Failed to send mail' });
            //         console.error(error);
            //     }
            // });
        } else {
            this.messageservice.add({ severity: 'warn', summary: 'Invalid', detail: 'Please fill all required fields' });
        }
    }
    ref: DynamicDialogRef | undefined;
    viewUserList() {
        this.ref = this.dialogService.open(UserlistComponent, {
            header: 'USER LIST',
            width: '60vw',
            modal: true,
            
        });
    }

}
