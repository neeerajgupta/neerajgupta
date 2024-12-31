import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule,CommonModule,ProgressBarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  value:any=100;
  value1:any=100;

  value2:any=100;

  value3:any=90;

  value4:any=95;

  value5:any=95;


}
