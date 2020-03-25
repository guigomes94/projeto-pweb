class ClienteEspecial extends Cliente {

  private _dependentes: Array<Cliente>;

  constructor(nome: string, cpf: string, conta: Conta) {
    super(nome, cpf, conta);
    this._dependentes = new Array<Cliente>();
  }

  get dependentes() {
    return this._dependentes;
  }

  adicionarDependente(cliente: Cliente) {
    this._dependentes.push(cliente);
  }
  
}