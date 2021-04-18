module.exports = class calculadora {
    constructor(int = false) {
        this.inteiro = int;
    }

    /**
     * 
     * @param {number} somar Soma dois números e informa o resultado.
     * @param {number} subtrair Subtrai dois números e informa o resultado.
     * @param {number} multiplicar Multiplica dois números e informa o resultado.
     * @param {number} dividir Divide dois números e informa o resultado.
     * @param {number} elevar Eleva um número e informa o resultado.
     * @param {number} imc Faz a conta de imc.
     * @returns 
     */

    somar(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1) || isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (this.inteiro) {
                return parseInt((conta1 + conta2))
            } else {
                return parseFloat((conta1 + conta2));
            }
        } catch (e) {
            throw new Error(e);
        }
    } 

    subtrair(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1) || isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (this.inteiro) {
                return parseInt((conta1 - conta2))
            } else {
                return parseFloat((conta1 - conta2));
            }        
        } catch (e) {
            throw new Error(e);
        }
    } 

    multiplicar(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1)||isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (this.inteiro) {
                return parseInt((conta1 * conta2))
            } else {
                return parseFloat((conta1 * conta2));
            }
        } catch (e) {
            throw new Error(e);
        }
    } 

    dividir(conta1, conta2, resto) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1) || isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (resto) {
                if (this.inteiro) {
                    return parseInt((conta1 / conta2)) + `, ${parseInt((conta1 % conta2 ))}`;
                } else {
                    return parseFloat((conta1 / conta2)) + `, ${parseFloat((conta1 % conta2 ))}`;
                }
            } else {
                return (conta1 / conta2);
            }
        } catch (e) {
            throw new Error(e);
        }
    } 

    elevar(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1) || isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (this.inteiro) {
                return parseInt(Math.pow(conta1, conta2))
            } else {
                return parseFloat(Math.pow(conta1, conta2));
            }
        } catch (e) {
            throw new Error(e);
        }
    } 

    imc(conta1, conta2) {
        try {
            if (!conta1 || !conta2) throw new Error("Um valor está faltando!");
            if (isNaN(conta1) || isNaN(conta2)) throw new Error("Insira um valor válido!");
            if (this.inteiro) {
                return parseInt(conta1 / (conta2 * conta2))
            } else {
                return parseFloat(conta1 / (conta2 * conta2));
            } 
        } catch (e) {
            throw new Error(e);
        }
    }

};
