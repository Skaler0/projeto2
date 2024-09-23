import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule], 
  templateUrl: './titulo.component.html', 
  styleUrl: './titulo.component.scss', 
})
export class TituloComponent {
  
}
