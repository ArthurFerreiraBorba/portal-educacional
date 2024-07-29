import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   aluno = {
    nome: 'arthur',
    cpf:  '999999999',
    email: 'email@Email.com',
    celular: '999999999',
    curso: {
      nome: 'fullStack',
      semastre1: 'HTML',
      semastre2: 'Javascript'
    }
  }


}
