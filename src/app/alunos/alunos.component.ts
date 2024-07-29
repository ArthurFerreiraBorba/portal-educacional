import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})
export class AlunosComponent {

  pesquisa = ''
  listaTodosUsarios = [
    {
      nome: 'arthur',
      cpf:  '999999999',
      email: 'email@Email.com',
      celular: '999999999',
      curso:  'fullStack'
    },
    {
      nome: 'bruno',
      cpf:  '888888888',
      email: 'email@Email.com',
      celular: '888888888',
      curso:  'CSS'
    },
    {
      nome: 'joão',
      cpf:  '777777777',
      email: 'email@Email.com',
      celular: '777777777',
      curso:  'CSS'
    },    {
      nome: 'luisa',
      cpf:  '666666666',
      email: 'email@Email.com',
      celular: '666666666',
      curso:  'CSS'
    },
  ]
  listaPesquisaUsuarios = this.listaTodosUsarios

  pesquisarAluno() {
    this.listaPesquisaUsuarios = this.listaTodosUsarios.filter(usuario => usuario.nome.toUpperCase().includes(this.pesquisa.toUpperCase()))
  }

}
