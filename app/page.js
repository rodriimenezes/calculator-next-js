"use client"

import { useState } from "react";

export default function Home() {
  const [resultado, setResultado] = useState(0)

  return (
    <main className="grid justify-center items-center grid-rows-2">
      <div>
        {resultado}
      </div>
      <div>
        <button>C</button>
        <button>()</button>
        <button>%</button>
        <button>/</button><br></br>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>X</button> <br></br>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button> <br></br>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button> <br></br>

        <button>+/-</button>
        <button>0</button>
        <button>,</button>
        <button>=</button> <br></br>
      </div>
    </main>
  );
}
