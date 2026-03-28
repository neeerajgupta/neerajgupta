import { Component, OnInit } from '@angular/core';
import { apServices } from '../../services/apServices.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [ToastModule,TableModule],
  templateUrl: './userlist.component.html',
  providers: [apServices,MessageService]
})
export class UserlistComponent implements OnInit {
  userlist:any;

  constructor(private apiservice: apServices, private messageservice: MessageService) { }

  ngOnInit(): void {
    this.getuserData()
    alert("Data fetched successfully");
  }
  getuserData(){
    this.apiservice.getData().subscribe({
      next:(res)=>{
        this.userlist=res;
        this.messageservice.add({severity:'success', summary: 'Success', detail: 'Data fetched successfully'});
      },
      error:(err)=>{
        this.messageservice.add({severity:'error', summary: 'Error', detail: 'Failed to fetch data'});
        console.log(err);
      }
    })
  }

  
}
