# Calculadora

Faça cálculos facilmente com este npm!

- [Calculadora](#calculadora)
  - [Configurando](#configurando)
  - [Fazendo uma soma](#fazendo-uma-soma)
  - [Fazendo uma subtração](#fazendo-uma-subtração)
  - [Fazendo uma multiplicação](#fazendo-uma-multiplicação)
  - [Fazendo uma divisão](#fazendo-uma-divisão)
  - [Calculando o Resto de uma divisão](#calculando-o-resto-de-uma-divisão)
  - [Elevando números](#elevando-números)
  - [Calcular imc (índice de massa corporal)](#calcular-imc-índice-de-massa-corporal)
  - [Calculando uma porcentagem](#calculando-uma-porcentagem)

## Configurando

```js
const Calculadora = require("calculadora-simples");

const calcular = new Calculadora(false); 
// se os resultados devem ser inteiros
// default = false
```

## Fazendo uma soma

```js
console.log(calcular.somar(1, 1));
// => 2
```

## Fazendo uma subtração

```js
console.log(calcular.subtrair(3, 1));
// => 2
```

## Fazendo uma multiplicação

```js
console.log(calcular.multiplicar(2, 3));
// => 6
```

## Fazendo uma divisão

```js
console.log(calcular.dividir(5, 20));
// inteiro = true => 0
// inteiro = false (default) => 0.25
```

## Calculando o Resto de uma divisão

```js
console.log(calcular.resto(10, 3));
// => 1
```

## Elevando números

```js
console.log(calcular.elevar(2, 2));
// => 4
```

## Calcular imc (índice de massa corporal)

```js
console.log(calcular.imc(50, 175));
// inteiro = true => 16
// inteiro = false (default) => 16.326...
```

## Calculando uma porcentagem

```js
console.log(calcular.porcentagem(25, 100));
// => 25
```
