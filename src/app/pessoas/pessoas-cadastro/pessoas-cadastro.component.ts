  import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/core/model';
import { PessoaService } from '../pessoa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent implements OnInit {

  pessoa = new Pessoa(); 

  constructor(private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { 
    const idpessoa = this.route.snapshot.params['idpessoa'];

    if (idpessoa) {
      this.carregarPessoa(idpessoa);
    }
  }

  carregarPessoa(idpessoa : number) {
    this.pessoaService.buscarPorId(idpessoa).then(pessoa => {
      this.pessoa = pessoa;
    })
  }

  get editando() {
    return Boolean(this.pessoa.idpessoa);
  }

  salvar(form : FormControl) {
    if (this.editando) {
      this.atualizarPessoa(form);
    } else {
      this.adicionarPessoa(form);
    }
  }

  adicionarPessoa(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa).then(pessoaAdicionada => {
      this.router.navigate(['/pessoas']);
    })
  }

  atualizarPessoa(form: FormControl) {
    this.pessoaService.atualizar(this.pessoa).then(pessoa => {
      this.router.navigate(['/pessoas']);
    })
  }

}
