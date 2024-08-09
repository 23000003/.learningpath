"use server"

import { revalidateTag } from "next/cache";

export async function CreateTodo(e){
    
    const todoName = e.get("todoName")?.toString()

    const newTodo = {
        todoName,
        isChecked: false
    };

    const res = await fetch('https://66b5bda5b5ae2d11eb647ebd.mockapi.io/api/todo/todos', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(newTodo)
    })

    

    revalidateTag('todos') //realtime 

}

export async function DeleteToDo(id){

    const todoID = id; 

    console.log(todoID)

    try{

        const res = await fetch(`https://66b5bda5b5ae2d11eb647ebd.mockapi.io/api/todo/todos/${todoID}`, {
            method: "DELETE",
        })
    
        revalidateTag('todos')
        
        console.log("SUCESS");
    }catch(err){
        console.log(err);
    }
}