"use client";

import { useRouter } from "next/navigation";
import "./homepage.css"

function App()
{
    const router = useRouter();

    return(
        <div>
            <div className="header">
                <button className="button" onClick={()=> router.push("/minigames/tictactoe")}>TicTacToe</button>
                <button className="button" onClick={()=> router.push("/minigames/snake")}>Snake</button>
            </div>
            <div  className="home">
                Hello, welcome to my page
            </div>
        </div>
    )
}
export default App