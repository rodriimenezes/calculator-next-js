"use client"

import { useState } from "react";

export default function Home() {
  const [resultado, setResultado] = useState(0)

  return (
    <main>
      <div className="display">
        {resultado}
      </div>
      <div className="grid grid-cols-4 gap-4 m-4">
        <button>C</button>
        <button>()</button>
        <button>%</button>
        <button>/</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>X</button> 

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button> 

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button> 

        <button>+/-</button>
        <button>0</button>
        <button>,</button>
        <button>=</button> 
      </div>
    </main>
  );
}
