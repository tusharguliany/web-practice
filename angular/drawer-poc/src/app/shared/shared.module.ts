import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/drawer/drawer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [DrawerComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DrawerComponent
  ]
})
export class SharedModule { }
