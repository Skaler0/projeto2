import { Component,inject } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { DataTambService } from '../../service/data-tamb.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TituloComponent,
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  pesquisa: string = '';
  filmeservice: DataTambService = inject(DataTambService);
  router: Router = inject(Router);

  async procurar() {
    // Pesquisar o filme pelo título
    const filme = await this.filmeservice.getdatabytitle(this.pesquisa);

    if (filme) {
      // Redirecionar para a página de detalhes do filme
      this.router.navigate(['/detalhes', filme.id]);
    } else {
      // Se o filme não for encontrado, exibir uma mensagem ou lidar com o erro
      console.log('Filme não encontrado');
    }
  }
}