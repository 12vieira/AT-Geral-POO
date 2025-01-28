/*4. Sistema de Produtos
Enunciado:
Crie um sistema para gerenciar diferentes tipos de produtos:
1. Crie uma classe abstrata chamada Produto com:
○ Propriedades protegidas nome e preco.
○ Um método abstrato calcularDesconto().
2. Crie duas subclasses:
○ Eletronico, com desconto de 10% no preço.
○ Alimento, com desconto de 5% no preço.
3. Adicione um método exibirDetalhes() para mostrar o nome, preço
original e preço com desconto.
4. Demonstre o uso de herança e polimorfismo ao criar instâncias das
subclasses e exibir as informações de cada produto.*/

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