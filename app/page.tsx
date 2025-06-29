'use client'

import { useEffect, useState } from "react";
import Image from 'next/image';
import Circle from "./Images/LetterO.png"
import Cross from "./Images/LetterX.png"
type player = 'X' | 'O'

export default function Home() {
  const [spots, setSpots] = useState<string>('#########')
  const [player, setPlayer] = useState<player>('X')
  const [winner, setWinner] = useState<string>()
  const [onewins, update1wins] = useState<number>(0)
  const [twowins, update2wins] = useState<number>(0)

  function setSpotHelper(num: number): void {
    const newSpots = spots.slice(0, num -1) + (player as string) + spots.slice(num)
    if(spots[num - 1] === '#' && !winner){
      setSpots(newSpots)
      if(player == 'X') setPlayer('O');
      else setPlayer('X');
    }
    
  }

  useEffect(() => {
    checkWinner();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spots]);

  function checkWinner(): void {
    let hasWinner = 0
    if((spots[0] === spots[1] && spots[1] === spots[2] )||
    (spots[0] === spots[3] && spots[3] === spots[6]) ||
    (spots[0] === spots[4] && spots[4] === spots[8])){
      if(spots[0] !== '#') {
        setWinner(spots[0]);
        hasWinner = 1;
      }
    }
    else if((spots[8] === spots[7] && spots[7] === spots[6]) || 
    (spots[8] === spots[5] && spots[5] === spots[2])){
      if(spots[8] !== '#') {
        setWinner(spots[0]);
        hasWinner = 1;
      }
    }
    else if((spots[4] === spots[2] && spots[4] === spots[6]) ||
    (spots[4] === spots[3] && spots[4] === spots[5]) ||
    (spots[4] === spots[1] && spots[4] === spots[7])){
      if(spots[4] !== '#') {
        setWinner(spots[0]);
        hasWinner = 1;
      } 
    }
      if(hasWinner){
        if(player == 'X'){update1wins(onewins + 1)}
        else update2wins(twowins + 1)
      }
  }

  function restart():void{
    setWinner("");
    setSpots("#########");
    setPlayer('X');
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] position-fixed">
      <h2> Current Player is: {player}</h2>
      <button className="button" onClick={() => restart()}> Restart</button>
      {(winner) && <h2>The Winner is: {winner}</h2>}
      <div className="square">
        <div className="smaller_square" onClick={() => setSpotHelper(1)}>
          {spots[0] == 'O' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[0] == 'X' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(2)}>
          {spots[1] == 'O' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[1] == 'X' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(3)}>
          {spots[2] == 'O' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[2] == 'X' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(4)}>
          {spots[3] == 'O' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[3] == 'X' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(5)}>
          {spots[4] == 'O' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[4] == 'X' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(6)}>
          {spots[5] == 'O' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[5] == 'X' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(7)}>
          {spots[6] == 'O' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[6] == 'X' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(8)}>
          {spots[7] == 'O' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[7] == 'X' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
        <div className="smaller_square" onClick={() => setSpotHelper(9)}>
          {spots[8] == 'O' && (<Image src={Circle} alt="circle here" width='166' height="166"/>)}
          {spots[8] == 'X' && (<Image src={Cross} alt="circle here" width='166' height="166"/>)}
        </div>
      <div className=" justify-items-center">
        <h1>Player O: {onewins}</h1> 
        <h1>Player X: {twowins}</h1>
      </div>
      </div>
    </div>
  );
}
