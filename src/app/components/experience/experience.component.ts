import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
// import 'aos/dist/aos.css';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineModule,CardModule,ButtonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  events: any;
  ngOnInit(): void {
    AOS.init({
      duration: 1000, 
    });

    this.events = [
      { status: 'Russell Tobin', date: '11/11/2023 ', enddate:'31/03/2026', icon: '../../../assets/IMAGE/experience-removebg-preview.png', image: 'russelltobin.svg' },
      { status: 'Quess Corp', date: '01/04/2026 ', enddate:'Present', icon: 'https://www.quesscorp.com/wp-content/uploads/2022/11/quessbluesvg.svg', image: 'quessbluesvg.svg' },
      
      { status: 'Comming Soon', date: '', enddate:'', icon: '../../../assets/IMAGE/commingsoon.jpeg',image: 'commingsoon.jpeg'},
  ];
  }
}
