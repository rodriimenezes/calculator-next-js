"use client"

import { useState } from "react";

export default function Home() {
  const [resultado, setResultado] = useState('0')
  const [operador, setOperador] = useState('')
  const [buffer, setBuffer] = useState(0)

  const calculate = (numeroUm, numeroDois, operador) => {

    switch (operador) {
      case '+':
        setResultado(`${numeroUm + numeroDois}`)
        break;

      case 'mod':
        setResultado(`${numeroDois % numeroUm}`)
        break;

      case '/':
        setResultado(`${numeroUm / numeroDois}`)
        break;

      case '*':
        setResultado(`${numeroUm * numeroDois}`)
        break;

      case '-':
        setResultado(`${numeroUm - numeroDois}`)
        break;

      default:
        break;
    }
  }

  return (
    <main>
      <div className="display">
        {resultado}
      </div>
      <div className="grid grid-cols-4 gap-4 m-4">
        <button onClick={() => (setResultado('0'))}>C</button>
        <button onClick={() => {
          setBuffer(Number(resultado))
          setOperador('mod')
          setResultado('0')
        }}>mod</button>
        <button onClick={() => (setResultado(`${Number(resultado) / 100}`))}>%</button>
        <button onClick={() => {
          setBuffer(Number(resultado))
          setOperador('/')
          setResultado('0')
        }}>/</button>

        <button onClick={() => (resultado == 0 ? setResultado('7') : setResultado(resultado + '7'))}>7</button>
        <button onClick={() => (resultado == 0 ? setResultado('8') : setResultado(resultado + '8'))}>8</button>
        <button onClick={() => (resultado == 0 ? setResultado('9') : setResultado(resultado + '9'))}>9</button>
        <button onClick={() => {
          setBuffer(Number(resultado))
          setOperador('*')
          setResultado('0')
        }}>X</button>

        <button onClick={() => (resultado == 0 ? setResultado('4') : setResultado(resultado + '4'))}>4</button>
        <button onClick={() => (resultado == 0 ? setResultado('5') : setResultado(resultado + '5'))}>5</button>
        <button onClick={() => (resultado == 0 ? setResultado('6') : setResultado(resultado + '6'))}>6</button>
        <button onClick={() => {
          setBuffer(Number(resultado))
          setOperador('-')
          setResultado('0')
        }}>-</button>

        <button onClick={() => (resultado == 0 ? setResultado('1') : setResultado(resultado + '1'))}>1</button>
        <button onClick={() => (resultado == 0 ? setResultado('2') : setResultado(resultado + '2'))}>2</button>
        <button onClick={() => (resultado == 0 ? setResultado('3') : setResultado(resultado + '3'))}>3</button>
        <button onClick={() => {
          setBuffer(Number(resultado))
          setOperador('+')
          setResultado('0')
        }}>+</button>

        <button onClick={() => setResultado(`${Number(resultado) * -1}`)}>+/-</button>
        <button onClick={() => (resultado == 0 ? setResultado('0') : setResultado(resultado + '0'))}>0</button>
        <button onClick={() => (resultado == 0 ? setResultado('0') : setResultado(resultado + '.'))}>.</button>
        <button onClick={() => calculate(Number(resultado), buffer, operador)}>=</button>
      </div>
    </main>
  );
}
