'use client'

import { useEffect, useState } from "react";
import Image from 'next/image';
import Circle from "./Images/LetterO.png"
import Cross from "./Images/LetterX.png"
type player = 'x' | 'o'

export default function Home() {
  const [spots, setSpots] = useState<string>('#########')
  const [player, setPlayer] = useState<player>('x')
  const [winner, setWinner] = useState<string>()

  function setSpotHelper(num: number): void {
    const newSpots = spots.slice(0, num -1) + (player as string) + spots.slice(num)
    if(spots[num - 1] === '#' && !winner){
      setSpots(newSpots)
      if(player == 'x') setPlayer('o');
      else setPlayer('x');
    }
    
  }

  useEffect(() => {
    checkWinner();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spots]);

  function checkWinner(): void {
    if((spots[0] === spots[1] && spots[1] === spots[2] )||
    (spots[0] === spots[3] && spots[3] === spots[6]) ||
    (spots[0] === spots[4] && spots[4] === spots[8])){
      if(spots[0] !== '#') setWinner(spots[0])}
    else if((spots[8] === spots[7] && spots[7] === spots[6]) || 
    (spots[8] === spots[5] && spots[5] === spots[2])){
      if(spots[8] !== '#') setWinner(spots[8])}
    else if((spots[4] === spots[2] && spots[4] === spots[6]) ||
    (spots[4] === spots[3] && spots[4] === spots[5]) ||
    (spots[4] === spots[1] && spots[4] === spots[7])){
      if(spots[4] !== '#') setWinner(spots[4])} 
  }

  function restart():void{
    setWinner("");
    setSpots("#########");
    setPlayer('x');
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2> Current Player is: {player}</h2>
      <button className="button" onClick={() => restart()}> Restart</button>
      {(winner) && <h2>The Winner is: {winner}</h2>}
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
