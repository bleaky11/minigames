"use client";

import { useRouter } from "next/navigation";
import "./homepage.css"

function App()
{
    const router = useRouter();
    let cursor: HTMLDivElement | null = document.querySelector(".cursor");

    // Position cursor div to cursor position
    document.addEventListener("mousemove", (e) => {
        if(cursor){
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
        }if(!cursor){
            cursor = document.querySelector(".cursor");
        }
    }); 

    return(
        <div className="screen">
            <div className="header">
                <button className="button TicTacToe" onClick={()=> router.push("/minigames/tictactoe")}>TicTacToe</button>
                <button className="button Snake" onClick={()=> router.push("/minigames/snake")}>Snake</button>
            </div>
            <div  className="home">
                Hello, welcome to my page
            </div>
            <div className="cursor"></div>
        </div>
    )
}
export default App