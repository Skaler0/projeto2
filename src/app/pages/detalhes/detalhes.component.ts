import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { datafilme } from '../../interface/filme';
import { DataTambService } from '../../service/data-tamb.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent {
  filmeinfo: datafilme | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  filmeservice: DataTambService = inject(DataTambService);
  router: Router = inject(Router);

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.filmeservice.getdatabyid(id).then((filme) => {
      this.filmeinfo = filme;
    });
  }

  // Função para abrir o trailer no YouTube
  verTrailer(trailerUrl: string | undefined) {
    if (trailerUrl) {
      window.open(trailerUrl, '_blank'); // Abrir o link em uma nova aba
    } else {
      console.error('Trailer não encontrado.');
    }
  }

  // Função para voltar à página principal
  voltar() {
    this.router.navigate(['/']);
  }
}
