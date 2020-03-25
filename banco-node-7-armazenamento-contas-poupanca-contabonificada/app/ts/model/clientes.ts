class Clientes {

  private clientes: Array<Cliente>;

  constructor() {
      this.clientes = new Array<Cliente>();
      let cl1 = new Cliente('Guilherme', '10045042411', new Conta('1'))
      let cl2 = new Cliente('Nami', '12345678900', new Conta('5'))
      this.clientes.push(cl1, cl2)

  }

  inserir(cliente: Cliente): void {
      this.clientes.push(cliente);
  }

  remover(cpf: string): void {
      const clienteARemover = this.pesquisar(cpf);
      if (clienteARemover) {
          const indicecliente = this.clientes.indexOf(clienteARemover);
          if (indicecliente > -1) {
              this.clientes.splice(indicecliente, 1);
          }
      }
  }

  pesquisar(cpf: string): Cliente {
      return this.clientes.find(
          cliente => cliente.cpf === cpf
      );
  }

  listar(): Array<Cliente> {
      return this.clientes;
  }

}
