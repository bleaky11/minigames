'use client'

import { useState } from "react";
import Image from 'next/image';
import Circle from "./Images/LetterO.png"
import Cross from "./Images/LetterX.png"
type player = 'x' | 'o'

export default function Home() {
  const [spots, setSpots] = useState<string>('#########')
  const [player, setPlayer] = useState<player>('x')

  function setSpotHelper(num: number): void {
    const newSpots = spots.slice(0, num -1) + (player as string) + spots.slice(num)
    if(spots[num - 1] === '#')
      setSpots(newSpots)
    if(player == 'x') setPlayer('o');
    else setPlayer('x');
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 style={{font:'menu'}}>background in progress</h1>
      <h2> Current spots are: {spots} </h2>
      <div className="square">
        <div className="smaller_square" onClick={() => setSpotHelper(1)}>
          {spots[0] == 'o' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[0] == 'x' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(2)}>
          {spots[1] == 'o' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[1] == 'x' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(3)}>
          {spots[2] == 'o' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[2] == 'x' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(4)}>
          {spots[3] == 'o' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[3] == 'x' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(5)}>
          {spots[4] == 'o' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[4] == 'x' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(6)}>
          {spots[5] == 'o' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[5] == 'x' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(7)}>
          {spots[6] == 'o' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[6] == 'x' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(8)}>
          {spots[7] == 'o' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[7] == 'x' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(9)}>
          {spots[8] == 'o' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[8] == 'x' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
      </div>
    </div>
  );
}
