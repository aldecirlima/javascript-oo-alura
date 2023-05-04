import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } 
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    } 

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

}