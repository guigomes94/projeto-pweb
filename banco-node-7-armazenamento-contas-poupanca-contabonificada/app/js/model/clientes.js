class Clientes {
    constructor() {
        this.clientes = new Array();
        let cl1 = new Cliente('Guilherme', '10045042411', new Conta('1'));
        let cl2 = new Cliente('Nami', '12345678900', new Conta('5'));
        this.clientes.push(cl1, cl2);
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indicecliente = this.clientes.indexOf(clienteARemover);
            if (indicecliente > -1) {
                this.clientes.splice(indicecliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
