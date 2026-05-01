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
  imports: [ToastModule, DialogModule, TableModule, ButtonModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './userlist.component.html',
  providers: [MessageService]
})
export class UserlistComponent implements OnInit {
  userlist:any[] = [];
  private localStorageKey = 'sentMailList';

  editForm = this.fb.group({
    name:[''],
    email:[''],
    phone:[''],
    msg:['']
  })
  constructor(private fb: FormBuilder, private messageservice: MessageService) { }

  ngOnInit(): void {
    this.loadUserList();
  }

  private loadUserList(): void {
    const stored = localStorage.getItem(this.localStorageKey);
    if (stored) {
      try {
        this.userlist = JSON.parse(stored);
        this.messageservice.add({severity:'success', summary: 'Success', detail: 'Local list loaded', life:2000});
      } catch (error) {
        console.error('Failed to parse local sent mail list', error);
        this.userlist = [];
      }
    }
  }

  private updateUserListStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.userlist));
  }

  visible:boolean=false;
  userid:any = 0;
  deleteUser(id: any){
    this.visible = true;
    this.userid = id;
  }

  deleteUserpop(){
    this.userlist = this.userlist.filter(item => item.id !== this.userid);
    this.updateUserListStorage();
    this.messageservice.add({severity:'success', summary: 'Success', detail: 'Entry deleted', life:2000});
    this.visible = false;
  }

  editvisible:boolean=false;
  editUser(userdata: any){
    this.editvisible = true;
    this.userid = userdata.id;
    this.editForm.patchValue({
      name: userdata.name,
      email: userdata.email,
      phone: userdata.phone,
      msg: userdata.msg
    })
  }

  saveEdit(){
    const updated = {
      id: this.userid,
      name: this.editForm.value.name,
      email: this.editForm.value.email,
      phone: this.editForm.value.phone,
      msg: this.editForm.value.msg
    };

    this.userlist = this.userlist.map(item => item.id === this.userid ? updated : item);
    this.updateUserListStorage();
    this.messageservice.add({severity:'success', summary: 'Success', detail: 'Entry updated', life:2000});
    this.editvisible = false;
  }

}
