import { Component, inject } from '@angular/core';
import { filmeComponent } from '../filme/filme.component';
import { CommonModule } from '@angular/common';
import { datafilme } from '../../interface/filme';
import { DataTambService } from '../../service/data-tamb.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [filmeComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  // Array que irá armazenar os dados dos filmes
  filmeinfo: datafilme[] = [];

  // Injeta o serviço DataTambService para obter os dados dos filmes
  filmeservice: DataTambService = inject(DataTambService);

  constructor() {
    // Chama o serviço para buscar os dados dos filmes e armazena no array filmeinfo
    this.filmeservice.getdata().then((filme) => {
      this.filmeinfo = filme;
    });
  }
}
