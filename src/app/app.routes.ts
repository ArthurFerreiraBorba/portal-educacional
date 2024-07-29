import { Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'aluno',
        children: [
            {
                path: '',
                component: AlunosComponent
            },
            {
                path: 'cadastro',
                component: CadastroAlunoComponent
            }
        ]
    },
    {
        path: 'disciplinas',
        component: DisciplinasComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
