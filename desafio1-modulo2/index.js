// Giovanni Montin - VAI NA WEB 
// 04/09/2023 - Modulo 2 | Javascript


// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

// 02
console.log('**Exercicio 2**')
for (let i = 0; i <= 20; i+=2){
    if (i%2 == 0){
        console.log(i)
    }
}

// 03 - crie uma função que exiba uma mensagem no console
console.log('**Exercicio 3**')
function mensagem(text){
    return console.log(text)
}
mensagem('Mensagem teste')
// Outra maneira
mensagem2 = (text) => {
    return console.log(text)
}
mensagem2('Mensagem teste - Arrow Function')


// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
console.log('**Exercicio 4**')
function nome(name){
    return console.log(name)
}
nome('Giovanni Montin')

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
console.log('**Exercicio 5**')
function exercicio5(name, years, musicStyle){
    return console.log(`Muito prazer ${name}! Você tem ${years} anos e seu estilo musical preferido é ${musicStyle}. Que legal!`)
}
exercicio5('Giovanni', 17, 'Rap Brasileiro')

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
console.log('**Exercicio 6**')
function exercicio6(film, music){
    return console.log(`Filme em Cartaz: ${film} - Musica do momento: ${music}`)
}
exercicio6('A Chegada', 'Cachorras Kamikazes')


// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
console.log('**Exercicio 7**')
function triplo(numero){
    let resultado = numero * 3;
    return resultado;
}
console.log(triplo(3))

// 08 - crie uma função que  verifique se uma  variável é true ou false
console.log('**Exericio 8**')
function booleanos(numero){
    let resultado = numero > 10;
    console.log(`O numero ${numero} é maior que 10? ${resultado}`)
    
}
booleanos(15)
booleanos(7)


// 09 - Crie um array que receba 5 itens e exiba no console.
console.log('**Exercicio 9**')
function lista(item1, item2, item3, item4, item5){
    let list = [item1, item2, item3, item4, item5]
    return list;
}
console.log(lista('banana','laranja', 'uva', 'melancia', 'kiwi'))

// 10 - Utilize um método para adicionar um nome ao inicio do array.
console.log('**Exercicio 10**')
let listaEx10 = ['João', 'Tiago', 'Trevor']
console.log(listaEx10)
listaEx10.unshift('Giovanni')
console.log(listaEx10)

// 11 - Utilize um método para remover o último nome do array.
console.log('**Exercicio 11**')
listaEx10.pop()
console.log(listaEx10)

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
console.log('**Exercicio 12**')
listaEx10.push('Eduardo', 'Antonio')
console.log(listaEx10)

// 13 - Utilize um método para remover o primeiro nome do array.
console.log('**Exercicio 13**')
listaEx10.shift()
console.log(listaEx10)

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
//  let numbers = [7,5,6,3,8,9,2,1,4]
console.log('**Exercicio 14**')
let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers)
numbers.sort()
console.log(numbers)

// 15 - Crie um objeto que receba ao menos três propriedades sobre você.
console.log('**Exercicio 15**')
let me = { nome:'Giovanni Montin', genero: 'nao-binario', idade: 17}
console.log(me)

// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
console.log('**Exercicio 16**')
me.altura = 1.53
console.log(me)

// 17 - Remova uma propriedade desse objeto.
console.log('**Exercicio 17** Idade deletada')
delete me.idade


// 18 - Mostre no console todas as propriedades desse objeto.
console.log('**Exercicio 18**')
console.log(me)


// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
              tecnico = {
                nome: 'Giovanni Montin',
                idade: 17,
                telefone: 11918900957,
                amigos: ['Laysa', 'Eduardo', 'Felipe', 'Alex']
              },
              marketing = {
                nome: 'Charlie Fortuna',
                idade: 19,
                telefone: 1500000000,
                amigos: ['Wanessa',  'João', 'Giovanni', 'Alex']
              },
              adm = {
                nome: 'Laysa',
                idade: 15,
                telefone: 1100000000,
                amigos: ['Giovanni', 'Walter', 'Catarina', 'Andrade']
              },
              publicidade = {
                nome: 'Alex',
                idade: 20,
                telefone: 1300000000,
                amigos: ['Andressa', 'Giovanni', 'Felipe', 'Eduardo']
              },
              recursosHumanos = {
                nome: 'Eduardo Montin',
                idade: 17,
                telefone: 1100000000,
                amigos: ['Alex', 'Giovanni', 'Felipe', 'Naelly']
              }
            ]

// 20 - Mostre no console o nome de um amigo de cada lista.
console.log('**Exercicio 20**')
for ( let i = 0; i <= 5; i++){
    console.log(cadastro[i].amigos[0])
}
