import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';
import { FormControl } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias-cadastro',
  templateUrl: './categorias-cadastro.component.html',
  styleUrls: ['./categorias-cadastro.component.css']
})
export class CategoriasCadastroComponent implements OnInit {

  categoria = new Categoria();

  constructor(private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const idcategoria = this.route.snapshot.params['id'];

    if (idcategoria) {
      this.carregarCategoria(idcategoria);
    }
  }

  carregarCategoria(id : number) {
    this.categoriaService.buscarPorId(id).then(categoria => {
      this.categoria = categoria;
    })
  }

  get editando() {
    return Boolean(this.categoria.id);
  }

  salvar(form : FormControl){
    if (this.editando) {
      this.atualizarCategoria(form);
    } else {
      this.adicionarCategoria(form);
    }
  }

  adicionarCategoria(form: FormControl) {
    this.categoriaService.adicionar(this.categoria).then(categoriaAdicionada => {
      this.router.navigate(['/categorias']);
    })
  }

  atualizarCategoria(form: FormControl) {
    this.categoriaService.atualizar(this.categoria).then(categoria => {
      this.router.navigate(['/categorias']);
    })
  }

}
