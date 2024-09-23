import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

// Definição das rotas da aplicação
export const routes: Routes = [
  {
    path: '', // Rota raiz (página inicial)
    title: 'principal', // Título da página
    component: PrincipalComponent, // Componente exibido nesta rota
  },
  {
    path: 'detalhes/:id', // Rota com parâmetro dinâmico ':id'
    title: 'detalhes', // Título da página
    component: DetalhesComponent, // Componente exibido nesta rota
  },
];
