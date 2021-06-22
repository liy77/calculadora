# Calculadora
Faça cálculos facilmente com este npm!

## Configurando
```js
const Calculadora = require("calculadora-simples");

const calcular = new Calculadora(false); 
// se os resultados devem ser inteiros
// default = false
```

## Fazendo uma soma.
```js
console.log(calcular.soma(1, 1));
// => 2
```

## Fazendo uma subtração.
```js
console.log(calcular.subtrair(3, 1));
// => 2
```

## Fazendo uma multiplicação.
```js
console.log(calcular.multiplicar(2, 3));
// => 6
```

## Fazendo uma divisão.
```js
console.log(calcular.dividir(5, 20));
// inteiro = true => 0
// inteiro = false (default) => 0.25
```

## Elevando números.
```js
console.log(calcular.elevar(2, 2));
// => 4
```

## Calcular imc (índice de massa corporal).
```js
console.log(calcular.imc(50, 2));
// inteiro = true => 12
// inteiro = false (default) => 12.5
```

## Fazendo conta de porcentagem.
```js
console.log(calcular.porcentagem(62, 30));
// bugfix first
```

