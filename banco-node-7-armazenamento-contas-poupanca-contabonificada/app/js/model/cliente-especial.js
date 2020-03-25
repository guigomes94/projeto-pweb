class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array();
    }
    get dependentes() {
        return this._dependentes;
    }
    adicionarDependente(cliente) {
        this._dependentes.push(cliente);
    }
}
