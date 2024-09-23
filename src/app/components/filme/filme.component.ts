import { Component, Input } from '@angular/core';
import { datafilme } from '../../interface/filme';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-filme',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './filme.component.html',
  styleUrl: './filme.component.scss',
})
export class filmeComponent {
  @Input() data!: datafilme; // Dados do filme
}
