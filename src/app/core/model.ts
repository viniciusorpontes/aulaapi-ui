export class Categoria {
  id: number;
  nome: string;
}

export class Produto {
  id: number;
  nome: string;
  preco: number;
  categoria = new Categoria();
}

export class Pessoa {
  idpessoa: number;
  nomepessoa: string;
  contatos = new Array<Contato>();
}

export class Contato {
  codigo: number;
  nome: string;
  email: string;
  telefone: string;
}
