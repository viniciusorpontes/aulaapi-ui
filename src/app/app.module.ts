import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CategoriasModule } from './categorias/categorias.module';
import { CategoriaService } from './categorias/categoria.service';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutoService } from './produtos/produto.service';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { ProdutosPesquisaComponent } from './produtos/produtos-pesquisa/produtos-pesquisa.component';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaService } from './pessoas/pessoa.service';
import { PessoasCadastroComponent } from './pessoas/pessoas-cadastro/pessoas-cadastro.component';

const routes: Routes =  [
  { path: 'categorias', component: CategoriasPesquisaComponent},
  { path: 'categorias/novo', component: CategoriasCadastroComponent},
  { path: 'categorias/:id', component: CategoriasCadastroComponent},
  { path: 'produtos', component: ProdutosPesquisaComponent},
  { path: 'produtos/novo', component: ProdutosCadastroComponent},
  { path: 'produtos/:id', component: ProdutosCadastroComponent},
  { path: 'pessoas', component: PessoasPesquisaComponent},
  { path: 'pessoas/novo', component: PessoasCadastroComponent},
  { path: 'pessoas/:idpessoa', component: PessoasCadastroComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CoreModule,
    CategoriasModule,
    ProdutosModule,
    PessoasModule,
    BrowserAnimationsModule
  ],
  providers: [CategoriaService, ProdutoService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
