import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent {

  cursos = [
    {
      nome: 'fullStack',
      semastre1: 'HTML',
      semastre2: 'Javascript'
    },
    {
      nome: 'HTML',
      semastre1: 'tags',
      semastre2: 'semântica'
    },
    {
      nome: 'CSS',
      semastre1: 'cores',
      semastre2: 'design'
    },
    {
      nome: 'Javascript',
      semastre1: 'variáveis',
      semastre2: 'lógica'
    },
  ]
}
