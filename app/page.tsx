'use client'

import { useState } from "react";

type player = 'x' | 'o'

export default function Home() {
  const [spots, setSpots] = useState<string>('#########')
  const [player, setPlayer] = useState<player>('x')

  function setSpotHelper(num: number): void {
    const newSpots = spots.slice(0, num -1) + (player as string) + spots.slice(num)
    setSpots(newSpots)
    if(player == 'x') setPlayer('o');
    else setPlayer('x');
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 style={{font:'menu'}}>Ignore the weird color</h1>
      <h2> Current spots are: {spots} </h2>
      <div className="square">
        <div className="smaller_square" onClick={() => setSpotHelper(1)}></div>
        <div className="smaller_square" onClick={() => setSpotHelper(2)}></div>
        <div className="smaller_square" onClick={() => setSpotHelper(3)}></div>
        <div className="smaller_square" onClick={() => setSpotHelper(4)}></div>
        <div className="smaller_square" onClick={() => setSpotHelper(5)}></div>
        <div className="smaller_square" onClick={() => setSpotHelper(6)}></div>
        <div className="smaller_square" onClick={() => setSpotHelper(7)}></div>
        <div className="smaller_square" onClick={() => setSpotHelper(8)}></div>
        <div className="smaller_square" onClick={() => setSpotHelper(9)}></div>
      </div>
    </div>
  );
}
