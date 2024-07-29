import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild('sair') sair!: ElementRef

  usuario = {
    nome: 'arthur',
    cpf:  '999999999',
    email: 'email@Email.com',
    celular: '999999999',
    curso:  'fullStack'
  }

  mudarDisplay () {
    this.sair.nativeElement.style.display = this.sair.nativeElement.style.display == 'none' ? 'block' : 'none'
  }
}
