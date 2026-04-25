import { HttpClientModule } from '@angular/common/http';
import { apServices } from '../../services/apServices.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [ToastModule,DialogModule,TableModule,ButtonModule, HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './userlist.component.html',
  providers: [apServices,MessageService]
})
export class UserlistComponent implements OnInit {
  userlist:any[]=[];

  editForm = this.fb.group({
    name:[''],
    email:[''],
    phone:[''],
    msg:['']
  })
  constructor(private fb: FormBuilder, private apiservice: apServices, private messageservice: MessageService) { }

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

  visible:boolean=false;
  userid:any=0;
  deleteUser(id: any){
   this.visible=true;
   this.userid=id
  }
  deleteUserpop(){
    this.apiservice.deleteData(this.userid).subscribe({
      next:(res)=>{
        this.messageservice.add({severity:'success', summary: 'Success', detail: `${res}  successfully`,life:2000});
        this.getuserData();
      },
      error:(err)=>{
        this.messageservice.add({severity:'error', summary: 'Error', detail: 'Failed to delete data',life:2000});
        console.log(err);
      }
    })
    this.visible=false;

  }


  editvisible:boolean=false;
  editUser(userdata: any){
    this.editvisible=true;
    this.userid=userdata.id;
    this.editForm.patchValue({
      name:userdata.name,
      email:userdata.email,
      phone:userdata.phone,
      msg:userdata.msg
    })
   }


   saveEdit(){

    const payload = {
      id:this.userid,
      name:this.editForm.value.name,
      email:this.editForm.value.email,
      phone:this.editForm.value.phone,
      msg:this.editForm.value.msg
    }
    this.apiservice.editApi(payload).subscribe({
      next:(resp)=>{
        this.messageservice.add({severity:'success', summary: 'Success', detail: `${resp}  successfully`,life:2000});

      },error:(err)=>{
        console.log(err);
        this.messageservice.add({severity:'error', summary: 'Error', detail: 'Failed to edit data',life:2000});
      }
    })
    this.editvisible=false;
   }

  
}
