"use client"

import { useState } from "react";

export default function Home() {
  const [numeroUm, setNumeroUm] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <main>
      {numeroUm}
    </main>
  );
}
