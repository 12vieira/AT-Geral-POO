

class Animal {
    constructor(nome, especie){
        this._nome = nome,
        this._especie = especie;
    }
    emitirSom(){
        throw new Error (" metodo não implementado")
    }
    descricao(){
        return `nome: ${this._nome}; espécie: ${this._especie}; Som emitido: ${this.emitirSom()}`
    }
}

class Cachorro extends Animal {
    emitirSom(){
        return "Latido"
    }
}
class Gato extends Animal {
    emitirSom(){
        return "Miado"
    }
}

const dog = new Cachorro('bob', 'canino');
console.log(dog.descricao());

const cat = new Gato('graça','felino');
console.log(cat.descricao());