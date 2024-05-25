// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AvatarModule,
    AvatarGroupModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
