const myVar = 'a';
let myAnotherVar = 'b';
var myOldVar = 'c';

myAnotherVar = 'd';

console.log(myVar, myAnotherVar);

const myFunction = () => {
  const functionVar = myVar;
  console.log(functionVar);
};

function testFunction({ conta, valor }) {
  return {
    ...conta,
    saldo: conta.saldo + valor,
  };
}

const saldo = 0;

class BankAccount {
  saldo = 0;

  operation() {
    this.deposit(10);
    this.deposit(10);
    this.deposit(10);
  }

  deposit(valor) {
    this.saldo += valor;
  }
}

myFunction();

const arrayA = ['a'];
const arrayB = ['b'];

console.log([...arrayA, ...arrayB]);

// arrayA = ['c'];

arrayA.push('c');

const objeto = {
  nome: 'Ricardo',
  idade: 29,
};

console.log(objeto);

objeto.idade = 30;

console.log(objeto);

Object.freeze(objeto);

objeto.idade = 31;

console.log(objeto);

objeto.idade = 32;

console.log(objeto);
