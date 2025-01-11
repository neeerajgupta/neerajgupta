import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
      { status: 'CRISIL Limited', date: '11/11/2023 ', icon: '../../../assets/IMAGE/experience-removebg-preview.png', image: 'crisil.png' },
      { status: 'Comming Soon', date: '', icon: '../../../assets/IMAGE/commingsoon.jpeg',image: 'commingsoon.jpeg'},
  ];
  }
}
