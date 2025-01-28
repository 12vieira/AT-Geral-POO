

class Produto {
    constructor(nome, preco){
        this._nome = nome,
        this._preco = preco
    }
    calcularDesconto(){
        throw new Error('método ainda não implementado')
    }
    mostrarInfo(){
        return `nome: ${this._nome}; preco original: ${this._preco}; desconto ${this.calcularDesconto()}`;
    }
}

class Eletronico extends Produto {
    calcularDesconto(){
        return this._preco*0.9;
    }
    
}
class Alimento extends Produto{
    calcularDesconto(){
        return this._preco*0.95;
    }
}

const car = new Eletronico('Celular', 2300);
//car.calcularDesconto();
console.log(car.mostrarInfo());

const mot = new Alimento('Arroz', 10);
//mot.calcularDesconto();
console.log(mot.mostrarInfo());