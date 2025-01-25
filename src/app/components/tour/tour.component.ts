import { Component, OnInit } from '@angular/core';
import { PageFlip } from 'page-flip';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tour',
  standalone: true,
 imports: [],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss',
})
export class TourComponent implements OnInit {
 
  


  ngOnInit(): void {

   

    const bookElement = document.getElementById('book') as HTMLElement;

    const btnprev = document.querySelector('.btn-prev') as HTMLElement;
    const btnNext = document.querySelector('.btn-next') as HTMLElement;
    const cu_PAge = document.querySelector('.page-current') as HTMLElement ;

    const page_state = document.querySelector('.page-state') as HTMLElement;


    const page_orientation = document.querySelector('.page-orientation') as HTMLElement;



    const pageFlip = new PageFlip(bookElement, {
      width: 500,
      height: 500,

    });

    // Load pages
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    btnprev.addEventListener("click", () => {
      pageFlip.flipPrev(); 
    });

    btnNext.addEventListener("click", () => {
      pageFlip.flipNext(); 
    });


    pageFlip.on("flip", (e) => {
      // cu_PAge.innerText =  (e.data + 1);
      console.log("flip",e)
    });

    
    pageFlip.on("changeState", (e) => {
      // page_state.innerText = e.data;
      console.log("changeState",e)
    });

    // triggered when page orientation changes
    pageFlip.on("changeOrientation", (e) => {
      let ele = e.data
      console.log("changeOrientation",e)
      
      // page_orientation.innerText = ele;
    });



















  }




















}
