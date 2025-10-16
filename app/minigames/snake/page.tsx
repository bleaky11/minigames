'use client';
import { useCallback, useEffect, useRef, useState } from "react";
import "./snake.css"
import { useRouter } from "next/navigation";
type direction = "up" | "down" | "left" | "right";
type Fruit = {y:number, x:number}

interface snake{
    coord: [y: number, x: number][];
}


const GRID_SIZE = 15

export default function Snake() 
{
    const router = useRouter();
    const inputQueue  = useRef<direction[]>(["right", "right"])
    const lastDir = useRef<direction>("right")
    const score = useRef<number>(0)
    const [alive, setAlive] = useState<boolean>(false)
    const [body, setBody] = useState<snake>({//Accidentally made them y, x but it works
        coord: [
            [7, 2], //Head
            [7, 1], //Body segment
            [7, 0]]}); //General idea is to add a tuple at the very beginning in the direction the snake is moving, and remove the tail,
        //  or if it eats something then keep the tail
    
    const placeFruit = useCallback(():Fruit => {//Places the fruit somewhere the snake is not 
        let x:number; let y:number;
        do{
            x = Math.floor(Math.random() * (14 - 1 + 1)) + 1;
            y = Math.floor(Math.random() * (14 - 1 + 1)) + 1
        }while(body.coord.some(seg => seg[0] === y && seg[1] === x));
        return {y, x}
    }, [body])

    const [fruit, setFruit] = useState<Fruit>(placeFruit()) //State of the fruit the snake eats

    const updateSnake = useCallback((y: number, x: number):boolean => {//Flag to check if the snake ate anything
        const newX = body.coord[0][1] + x;
        const newY = body.coord[0][0] + y;
        const newHead:[number, number] = [newY, newX];
        const newBody = [newHead, ...body.coord]
        if(newHead[0] === fruit.y && newHead[1] === fruit.x){//If snake goes over a fruit
            setFruit(placeFruit())//Places a new fruit
            score.current++;
        }
        else newBody.pop()
        let collision = false;
        if(newHead[0] <= 0 || newHead[0] >= 15 || newHead[1] <= 0 || newHead[1] >= 15 || body.coord.some(seg => seg[0] === newY && seg[1] === newX)) collision = true
        setBody({coord:newBody})
        return collision
    }, [body, fruit, placeFruit])

    const moveSnake = useCallback(():boolean => 
    {
        let y = 0; //Using let so they can be changed
        let x = 0;
        const curr = inputQueue.current[0] ? inputQueue.current[0]: lastDir.current
        if(inputQueue.current[0]) lastDir.current = inputQueue.current[0]
        inputQueue.current = inputQueue.current.slice(1)
        switch(curr){
            case "up": 
                y = -1;
                break;
            case "down":
                y = 1;
                break;
            case "left":
                x = -1;
                break;
            case "right":
                x = 1;
                break;
        }
        return updateSnake(y, x,); 
    }, [updateSnake, inputQueue])

    

    // Handles direction input
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            let newDir: direction | null = null;

            switch (e.key) {
                case "ArrowUp": case "w": newDir = "up"; break;
                case "ArrowDown": case "s": newDir = "down"; break;
                case "ArrowLeft": case "a": newDir = "left"; break;
                case "ArrowRight": case "d": newDir = "right"; break;
            }

            if (!newDir) return;

            // prevent reversing
            if (
                (inputQueue.current[inputQueue.current.length-1] === "up" && newDir === "down") ||
                (inputQueue.current[inputQueue.current.length-1] === "down" && newDir === "up") ||
                (inputQueue.current[inputQueue.current.length-1] === "left" && newDir === "right") ||
                (inputQueue.current[inputQueue.current.length-1] === "right" && newDir === "left")
            ) return;

            // **push new direction to the queue** instead of dir.current
            inputQueue.current = [...inputQueue.current, newDir].slice(-5);
        }

        window.addEventListener("keydown", handleKey);

        // Cleanup listener when component unmounts
        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    }, []);

    const update = useCallback(()=> {
        //updates one frame
        const running = moveSnake()
        if(running) setAlive(false)
    }, [moveSnake])

    useEffect(() => {
        if (!alive) return; // don't start interval if not running

        const intervalId = setInterval(update, 150);

        return () => clearInterval(intervalId); // cleanup when stopped or component unmounts
    }, [alive, update]); // re-run whenever alive changes

    function handleRestart(){
        const newBody:[number, number][] = [[7,2], [7,1], [7,0]];
        setBody({coord:newBody});
        inputQueue.current = ["right", "right"];
        setFruit(placeFruit());
    }

    return (
        <div className="body">
            {!alive && <div>Score:{score.current}</div>} 
            <button className="restart_button" onClick={handleRestart}>Restart </button>
            <button className="exit_button" onClick={()=> router.push("/")}> Leave</button>
            <div className="grid" onClick={()=>setAlive(true)}>
                {Array.from({ length: GRID_SIZE }).map((_, y) =>
                    Array.from({ length: GRID_SIZE }).map((_, x) => {
                    const isSnake = body.coord.some(seg => seg[0] === y && seg[1] === x);
                    const isFruit = fruit.y === y && fruit.x === x;
                    return (
                        <div
                        key={`${y}-${x}`}
                        className={`cell-${
                        isSnake ? "snake" : isFruit ? "fruit" : "empty"
                        }`}
                        />
                    );
                    })
                )}
            </div>
        </div>
    )

    //Check out eventlistener for inputs
}