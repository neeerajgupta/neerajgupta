import { Component, OnInit } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-educations',
  standalone: true,
  imports: [AnimateOnScrollModule],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.scss'
})
export class EducationsComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000, 
    });
  }

}
