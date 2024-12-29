import { Component, OnInit } from '@angular/core';
import { PhoteSrvicescesService } from '../../services/phote-srvicesces.service';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [CarouselModule, CommonModule, FormsModule, HttpClientModule, TagModule,TooltipModule],
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    providers: [PhoteSrvicescesService]
})
export class TopbarComponent implements OnInit {
    photos: any | undefined;

    responsiveOptions: any[] | undefined;

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

}
