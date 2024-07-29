import { Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, RouterOutlet, HeaderComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
