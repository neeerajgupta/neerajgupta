import { HttpClientModule } from '@angular/common/http';
import { apServices } from '../../services/apServices.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [ToastModule,TableModule, HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './userlist.component.html',
  providers: [apServices,MessageService]
})
export class UserlistComponent implements OnInit {
  userlist:any[]=[];

  constructor(private apiservice: apServices, private messageservice: MessageService) { }

  ngOnInit(): void {
    this.getuserData()
  }
  getuserData(){
    this.apiservice.getData().subscribe({
      next:(res)=>{
        const responseData = res as any; 
        this.userlist = responseData; 
        this.messageservice.add({severity:'success', summary: 'Success', detail: 'Data fetched successfully',life:2000});
      },
      error:(err)=>{
        this.messageservice.add({severity:'error', summary: 'Error', detail: 'Failed to fetch data',life:2000});
        console.log(err);
      }
    })
  }

  
}
