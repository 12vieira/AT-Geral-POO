

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