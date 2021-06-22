module.exports = class calculadora {
  #inteiro
  constructor(inteiro = false) {
      if (typeof inteiro !== 'boolean') throw new Error("O valor inserido não é do tipo boolean, insira um valor do tipo boolean e tente novamente.");
      this.#inteiro = Boolean(inteiro);
  }

  /**
   * Soma dois números e retorna o resultado.
   * @param {Number} num1 primeiro valor à ser somado
   * @param {Number} num2 segundo valor à ser somado
   * @returns {Number} o resultado da soma
   */
  somar(num1, num2) {
      try {
          if (!num1 || !num2) throw new Error("Um valor está faltando!");
          if (isNaN(num1) || isNaN(num2)) throw new Error("Insira valores válidos!");
          const resultado = num1 + num2;
          if (this.#inteiro) {
              return parseInt(resultado);
          } else {
              return parseFloat(resultado);
          }
      } catch (e) {
          throw new Error(e);
      }
  }

  /**
   * Subtrai dois números e retorna o resultado.
   * @param {Number} num1 primeiro valor à ser subtraído
   * @param {Number} num2 segundo valor à ser subtraído
   * @returns {Number} o resultado da subtração
   */
  subtrair(num1, num2) {
      try {
          if (!num1 || !num2) throw new Error("Um valor está faltando!");
          if (isNaN(num1) || isNaN(num2)) throw new Error("Insira valores válidos!");
          const resultado = num1 - num2
          if (this.#inteiro) {
              return parseInt(resultado);
          } else {
              return parseFloat(resultado);
          }
      } catch (e) {
          throw new Error(e);
      }
  }

  /**
   * Multiplica dois números e retorna o resultado.
   * @param {Number} valor valor que será multiplicado
   * @param {Number} multiplicador valor que multiplicará
   * @returns {Number} o resultado da multiplicação
   */
  multiplicar(valor, multiplicador) {
      try {
          if (!valor || !multiplicador) throw new Error("Um valor está faltando!");
          if (isNaN(valor) || isNaN(multiplicador)) throw new Error("Insira valores válidos!");
          const resultado = valor * multiplicador
          if (this.#inteiro) {
              return parseInt(resultado);
          } else {
              return parseFloat(resultado);
          }
      } catch (e) {
          throw new Error(e);
      }
  }

  /**
   * Divide dois números e retorna o resultado.
   * @param {Number} dividendo valor que será dividido
   * @param {Number} divisor valor que dividirá
   * @returns {Number} o resultado da Divisão
   */
  dividir(dividendo, divisor) {
      try {
          if (!dividendo || !divisor) throw new Error("Um valor está faltando!");
          if (isNaN(dividendo) || isNaN(divisor)) throw new Error("Insira valores válidos!");
          const resultado = dividendo / divisor
          if (this.#inteiro) {
              return parseInt(resultado);
          } else {
              return parseFloat(resultado);
          }
      } catch (e) {
          throw new Error(e);
      }
  }

  /**
   * Divide dois números e informa o resto.
   * @param {Number} dividendo valor que será dividido
   * @param {Number} divisor valor que dividirá
   * @returns {Number} o resto da Divisão
   */
  resto(dividendo, divisor) {
      try {
          if (!dividendo || !divisor) throw new Error("Um valor está faltando!");
          if (isNaN(dividendo) || isNaN(divisor)) throw new Error("Insira valores válidos!");
          const resultado = dividendo % divisor;
          if (this.#inteiro) {
              return parseInt(resultado);
          } else {
              return parseFloat(resultado);
          }
      } catch (e) {
          throw new Error(e);
      }
  }

  /**
   * Potencializa a base ao expoente e retorna o resultado.
   * @param {Number} base valor que será potencializado
   * @param {Number} expoente valor que servirá de expoente
   * @returns {Number} o resultado da potenciação
   */
  elevar(base, expoente) {
      try {
          if (!base || !expoente) throw new Error("Um valor está faltando!");
          if (isNaN(base) || isNaN(expoente)) throw new Error("Insira valores válidos!");
          const resultado = Math.pow(base, expoente);
          if (this.#inteiro) {
              return parseInt(resultado);
          } else {
              return parseFloat(resultado);
          }
      } catch (e) {
          throw new Error(e);
      }
  }

  /**
   * Calcula o IMC (índice de massa corporal) e retorna o resultado
   * @param {Number} peso peso (em Kg) da pessoa à ser calculada
   * @param {Number} altura altura (em cm) da pessoa à ser calculada
   * @returns {Number} o IMC dessa pessoa
   */
  imc(peso, altura) {
      try {
          if (!peso || !altura) throw new Error("Um valor está faltando!");
          if (isNaN(peso) || isNaN(altura)) throw new Error("Insira valores válidos!");
          const imc = peso / (this.elevar((altura / 100), 2));
          if (this.#inteiro) {
              return parseInt(imc);
          } else {
              return parseFloat(imc);
          }
      } catch (e) {
          throw new Error(e);
      }
  }

  /**
   * Calcula a porcentagem de um valor e retorna o resultado
   * @param {Number} porcentagem porcentagem que deve ser calculada
   * @param {Number} valor valor à ser calculado
   * @returns {Number} a porcentagem do valor calculado
   */
  porcentagem(porcentagem, valor) {
      try {
          if (!valor || !porcentagem) throw new Error("Um valor está faltando!");
          if (isNaN(valor) || isNaN(porcentagem)) throw new Error("Insira valores válidos!");
          const resultado = (porcentagem / 100) * valor;
          if (this.#inteiro) {
              return parseInt(resultado);
          } else {
              return parseFloat(resultado);
          }
      } catch (e) {
          throw new Error(e);
      }
  }

};
