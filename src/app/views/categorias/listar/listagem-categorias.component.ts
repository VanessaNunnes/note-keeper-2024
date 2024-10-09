import { Component, OnInit } from '@angular/core';
import { ListagemCategorias } from '../models/categoria.models';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-listagem-categorias',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule, NgForOf, RouterLink],
  templateUrl: './listagem-categorias.component.html',
  styleUrl: './listagem-categorias.component.scss'
})
export class ListagemCategoriasComponent implements OnInit {
  categorias: ListagemCategorias[];

  constructor(private categoriaService: CategoriaService){
    this.categorias = [];
  }
  ngOnInit(): void {
    this.categoriaService.selecionarTodos().subscribe(res => {
      this.categorias = res;
    }) ;
  }
}
