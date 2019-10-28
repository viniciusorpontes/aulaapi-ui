import { FormControl } from '@angular/forms';
import { ProdutoService } from './../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  produto = new Produto();

  categorias: any[];
  categoriaSelecionada: number;

  constructor(private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarProduto(id);
    }

    this.carregarCategorias();
  }

  carregarProduto(id : number) {
    this.produtoService.buscarPorId(id).then(produto => {
      this.produto = produto;
    })
  }

  carregarCategorias() {
    this.categoriaService.listarTodas().then(lista => {
      this.categorias = lista.map(cat => ({ label: cat.nome, value: cat.id }));
      console.log(this.categorias);
    })
  }

  get editando() {
    return Boolean(this.produto.id);
  }

  salvar(form : FormControl) {
    if (this.editando) {
      this.atualizarProduto(form);
    } else {
      this.adicionarProduto(form);
    }
  }

  adicionarProduto(form: FormControl) {
    this.produtoService.adicionar(this.produto).then(produtoAdicionado => {
      this.router.navigate(['/produtos']);
    })
  }

  atualizarProduto(form: FormControl) {
    this.produtoService.atualizar(this.produto).then(produto => {
      this.router.navigate(['/produtos']);
    })
  }

}
