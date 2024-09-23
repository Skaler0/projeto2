import { Injectable } from '@angular/core';
import { datafilme } from '../interface/filme';

@Injectable({
  providedIn: 'root', // Torna o serviço disponível em toda a aplicação
})
export class DataTambService {
  constructor() {}

  url = 'http://localhost:3000/filme'; // URL da API

  // Obtém todos os filmes da API
  async getdata(): Promise<datafilme[]> {
    const data = await fetch(this.url);
    return data.json();
  }

  // Obtém um filme por ID
  async getdatabyid(id: number): Promise<datafilme | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return data.json();
  }

  // Obtém um filme por título
  async getdatabytitle(titulo: string): Promise<datafilme | undefined> {
    const data = await fetch(this.url);
    const filmes: datafilme[] = await data.json();
    return filmes.find(
      (filme) => filme.titulo.toLowerCase() === titulo.toLowerCase() // Faz a comparação ignorando maiúsculas/minúsculas
    );
  }
}
