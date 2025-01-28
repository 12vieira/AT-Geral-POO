/*3. Sistema de Veículos
Enunciado:
Crie um sistema para gerenciar veículos:
1. Implemente uma classe abstrata Veiculo com:
○ Propriedades protegidas marca e modelo.
○ Um método abstrato calcularImposto().
2. Crie duas subclasses:
○ Carro, cujo imposto é 10% do valor do carro.
○ Moto, cujo imposto é 5% do valor da moto.
3. Adicione um método mostrarInformacoes() que exiba a marca, modelo
e imposto.
4. Demonstre o polimorfismo criando uma lista com instâncias das
subclasses e iterando para exibir as informações de cada veículo.*/


class Veiculo {
    constructor(marca, modelo){
        this._marca = marca,
        this._modelo = modelo
    }
    calcularImposto(){
        throw new Error('método ainda não implementado')
    }
    mostrarInfo(){
        return `marca: ${this._marca}; modelo: ${this._modelo}; imposto ${this.calcularImposto()}`;
    }
}

class Carro extends Veiculo {
    calcularImposto(){
        return '10%';
    }
    
}
class Moto extends Veiculo{
    calcularImposto(){
        return '5%';
    }
}

const car = new Carro('Renault', 'Sandero');
//car.calcularImposto();
console.log(car.mostrarInfo());

const mot = new Moto('Susuki', 'Intruder');
//mot.calcularImposto();
console.log(mot.mostrarInfo());