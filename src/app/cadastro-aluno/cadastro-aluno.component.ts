import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent implements OnInit{
  
  cursos = [
    {
      nome: 'fullStack'
    },
    {
      nome: 'HTML'
    },
    {
      nome: 'CSS'
    },
    {
      nome: 'Javascript'
    },
  ]
  formCadastro!: FormGroup
  
  ngOnInit(): void {
    this.formCadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required)
    })
  }

  constructor(private router: Router) {}

  salvar() {
    if (this.formCadastro.valid) {
      window.alert('Usuário salvo com sucesso')
      this.router.navigate(['/aluno'])
    }
  }
}
