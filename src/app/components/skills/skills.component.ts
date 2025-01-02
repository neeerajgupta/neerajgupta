import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule,CommonModule,ProgressBarModule,ButtonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  providers:[MessageService]
})
export class SkillsComponent {
  value:any=0;
  value1:any=0;

  value2:any=0;

  value3:any=0;

  value4:any=0;

  value5:any=0;


  interval: any;

  constructor(private messageService: MessageService, private ngZone: NgZone) {}
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
        this.interval = setInterval(() => {
            this.ngZone.run(() => {
                this.value = this.value + Math.floor(Math.random() * 10) + 1;
                this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
                this.value2 = this.value2 + Math.floor(Math.random() * 10) + 1;
                this.value3 = this.value3 + Math.floor(Math.random() * 10) + 1;
                this.value4 = this.value4 + Math.floor(Math.random() * 10) + 1;
                this.value5 = this.value5 + Math.floor(Math.random() * 10) + 1;
                if (this.value >= 100 && this.value1 >= 100 &&this.value2 >= 100 && this.value3 >= 100 && this.value4 >= 100 &&this.value5 >= 100) {
                    this.value = 100;
                    this.value1 = 90;
                    this.value2 = 95;
                    this.value3 = 89;
                    this.value4 = 80;
                    this.value5 = 100;
                    // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                    clearInterval(this.interval);
                }
            });
        }, 400);
    });
}

ngOnDestroy() {
    if (this.interval) {
        clearInterval(this.interval);
    }
}


}
