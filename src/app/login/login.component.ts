import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  
  formLogin!: FormGroup
  
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    })
  }

  constructor(private router: Router) {}

  entrar() {
    if (this.formLogin.valid) {
      this.router.navigate(['/home'])
    }
  }

  esqueciSenha() {
    window.alert('Processo de recuperação de senha enviado para o e-mail cadastrado')
  }

}
