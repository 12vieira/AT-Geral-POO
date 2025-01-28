/*5. Sistema de Animais
Enunciado:
Implemente um sistema que represente diferentes tipos de animais:
1. Crie uma classe abstrata Animal com:
○ Propriedades protegidas nome e especie.
○ Um método abstrato emitirSom().
2. Crie duas subclasses:
○ Cachorro, que emite o som "Latido".
○ Gato, que emite o som "Miau".
3. Adicione um método descricao() para mostrar o nome, espécie e som
do animal.
4. Use polimorfismo para exibir a descrição de diferentes animais.*/

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