

class Pagamento {
    constructor(valor, descricao){
        this._valor = valor,
        this._descricao = descricao
    }
    calcularTaxa(){
        throw new Error('método ainda não implementado')
    }
    detalhes(){
        return `Valor com a Taxa: ${this.calcularTaxa()}, pago com ${this._descricao}; Valor inicial ${this._valor}`;
    }
}

class CartaoCredito extends Pagamento {
    calcularTaxa(){
        return this._valor * 1.05;
    }
    
}
class Boleto extends Pagamento{
    calcularTaxa(){
        return this._valor * 1.02;
    }
}

const card = new CartaoCredito(230, 'cartão de crédito');
card.calcularTaxa();
console.log(card.detalhes());

const bol = new Boleto(540, 'boleto');
bol.calcularTaxa();
console.log(bol.detalhes());
