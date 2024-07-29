import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portal-educacional';
  mostrarHeader = true

  constructor(private router: Router) {
    this.router.events.subscribe(retorno => {
      if (retorno instanceof NavigationEnd) {
        this.mostrarHeader = !this.router.url.includes('login') && !this.router.url.includes('cadastro')
      }
    })
  }

}
