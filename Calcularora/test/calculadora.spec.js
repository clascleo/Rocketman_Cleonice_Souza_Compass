import assert from "assert"
import chai from "chai"
import Calculadora from "../src/Calculadora.js"

const expect = chai.expect

//Testes para cáculo de adição (+)

describe("Testes de soma",()=>{
   it("Deve somar 3 e 7 resultando em 10",()=>{
      let resultado = Calculadora.soma(3,7) 
      expect(resultado).to.be.equals(10)
   })
   it("Deve somar -9 e 8 resultando em -1",()=>{
      let resultado = Calculadora.soma(-9,8)
      expect(resultado).to.be.equals(-1)
   })
   //Simulando erro = esperado um número negativo como resultado
   it("Deve somar 8 e -9 resultando em -1",()=>{
      let resultado = Calculadora.soma(-9,8)
      expect(resultado).to.be.equals(1)
   })
}) 

//Testes para cálculo de subtração (-)

describe("Testes de subtração",()=>{
   it("deve subtrair 90 e 60 resultando em 30",()=>{
      let resultado = Calculadora.sub(90,60)
      expect(resultado).to.be.equals(30)
   })
   it("deve subtrair 35 e 15 resultando em 20",()=>{
      let resultado = Calculadora.sub(35,15)
      expect(resultado).to.be.equals(20)
   })
   //Simulando erro = o valor esperado como resultado é 16
   it("deve subtrair 42 e 26 resultando em 16",()=>{
      let resultado = Calculadora.sub(42,26)
      expect(resultado).to.be.equals(14)
   })
})

//Testes para cálculo de divisão (/)

describe("Testes de divisão",()=>{
   it("deve dividir 10 por 2 resultando em 5",()=>{
      let resultado = Calculadora.div(10,2)
      expect(resultado).to.be.equals(5)
   })
   it("deve dividir 30 por 3 resultando em 10",()=>{
      let resultado = Calculadora.div(30,3)
      expect(resultado).to.be.equals(10)
   })
   //Simulando erro = esperado como resultado valor 8.333333333333334
   it("deve dividir 50 por 6 resultando em 8.333333333333334",()=>{
      let resultado = Calculadora.div(50,6)
      expect(resultado).to.be.equals(8.33)
   })
})

//Testes para cálculo de multiplicação (*)

describe("Testes de multiplicação",()=>{
   it("deve multiplicar 6 vezes 6 resultando em 36",()=>{
      let resultado = Calculadora.mult(6,6)
      expect(resultado).to.be.equals(36)
   })
   it("deve multiplicar 7 vezes 9 resultando em 63",()=>{
      let resultado = Calculadora.mult(7,9)
      expect(resultado).to.be.equals(63)
   })
   //Simulando erro = esperado como resultado o valor 32
   it("deve multiplicar 4 vezes 8 resultando em 32",()=>{
      let resultado = Calculadora.mult(4,8)
      expect(resultado).to.be.equals(24)
   })
})

//Testes para cálculo com numeros com exponencial (**)

describe("Testes para calculos com exponencial",()=>{
   it("deve multiplicar 5 por ele mesmo 2 vezes resultando em 25",()=>{
      let resultado = Calculadora.exp(5,2)
      expect(resultado).to.be.equals(25)
   })
   it("deve multiplicar 3 por ele mesmo 3 vezes resultando em 27",()=>{
      let resultado = Calculadora.exp(3,3)
      expect(resultado).to.be.equals(27)
   })
   //Simulando erro = esperado como resultado o valor 2401
   it("deve multiplicar 7 por ele mesmo 4 vezes resultando em 2401",()=>{
      let resultado = Calculadora.exp(7,4)
      expect(resultado).to.be.equals(28)
   })
})

//Testes para cálculo de porcentagem

describe("Testes para calculos de porcentagem",()=>{
   it("deve calcular 30% de 50",()=>{
      let resultado = Calculadora.porcent(30,50)
      expect(resultado).to.be.equals(15)
   })
   it("deve calcular 20% de 500",()=>{
      let resultado = Calculadora.porcent(20,500)
      expect(resultado).to.be.equals(100)
   })
   //Simulação de erro = esperado como resultado valor 0(.)5
   it("deve calcular 5% de 10",()=>{
      let resultado = Calculadora.porcent(5,10)
      expect(resultado).to.be.equals(0,5)
   })
})

// Testes para cáculo de raiz quadrada

describe("Testes para calculo de raiz quadrada",()=>{
   it("Deve encontrar a raiz quadrada de 7 que é 49",()=>{
      let resultado = Calculadora.quad(7)
      expect(resultado).to.be.equals(49)
   })
   it("Deve encontrar a raiz quadrada de 6 que é 36",()=>{
      let resultado = Calculadora.quad(6)
      expect(resultado).to.be.equals(36)
  })  
  //Simulando erro = esperado como resultado valor 1296
  it("Deve encontrar a raiz quadrada de 36 que é 1296",()=>{
     let resultado = Calculadora.quad(36)
     expect(resultado).to.be.equals(6)
  })
})

