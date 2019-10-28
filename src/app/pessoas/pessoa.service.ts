import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Pessoa } from '../core/model';

export class PessoaFiltro {
  nomepessoa: string;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  pessoasUrl = 'http://localhost:8080/pessoas';

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nomepessoa) {
      params = params.append('nomepessoa', filtro.nomepessoa);
    }

    return this.http.get<any>(`${this.pessoasUrl}`, { params })
      .toPromise()
      .then(response => {
        const pessoas = response.content;

        const resultado = {
          pessoas,
          total: response.totalElements
        }

        return resultado;
      });
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post<Pessoa>(this.pessoasUrl, pessoa).toPromise();
  }

  atualizar(pessoa: Pessoa) : Promise<Pessoa> {
    return this.http.put<Pessoa>(`${this.pessoasUrl}/${pessoa.idpessoa}`, pessoa).toPromise();
  }

  excluir(idpessoa: number): Promise<void> {
    return this.http.delete(`${this.pessoasUrl}/${idpessoa}`).toPromise().then(() => null);
  }

  buscarPorId(idpessoa : number) : Promise<Pessoa> {
    return this.http.get<Pessoa>(`${this.pessoasUrl}/${idpessoa}`).toPromise();
  }

}
