import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CadastroCategoria, CategoriaCriada, ListagemCategorias } from '../models/categoria.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private readonly url = `${environment.API_URL}/categorias`;

  constructor(private http: HttpClient) { }

  selecionarTodos() : Observable<ListagemCategorias[]> {
    return this.http.get<ListagemCategorias[]>(this.url);
  }

  cadastrar(novaCategoria: CadastroCategoria): Observable<CategoriaCriada> {
    return this.http.post<CategoriaCriada>(this.url, novaCategoria);
    }
}
