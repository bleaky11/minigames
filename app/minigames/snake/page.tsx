'use client';
import { useState } from "react";
type direction = "up" | "down" | "left" | "right";

interface snake{
    coord: {y: number, x: number}[];
}

export default function Snake() 
{
    const [dir, setDir] = useState<direction>("left");
    const [body, setBody] = useState<snake>({//Accidentally made them y, x but it works
        coord: [
            {y:7, x:2}, //Head
            {y:7, x:1}, //Body segment
            {y:7, x:0}]}); //General idea is to add a tuple at the very beginning in the direction the snake is moving, and remove the tail,
        //  or if it eats something then keep the tail

    function updateSnake(y: number, x: number, flag:boolean):void{
        const newX = body.coord[0].y + y;
        const newY = body.coord[0].x + x;
        const newHead = {newY, newX};
        const length = flag ? body.coord.length : body.coord.length-1;
        body = 
    }

    function moveSnake(): void
    {
        switch(dir){
            case "up": updateSnake(1, 0, false); //Change false to a boolean about whether the snake ate the fruit
        }
        return;
    }

    //Check out eventlistener for inputs
}