import TodoItem from "./components/todoItem";
import AddToDo from "./components/Addtodo";

export default async function Page(){

    const res = await fetch('https://66b5bda5b5ae2d11eb647ebd.mockapi.io/api/todo/todos', {
        cache: "no-cache",
        next: { //realtime 
            tags: ['todos'],
        }
    })

    const todos = await res.json();

    return(
        <div className="flex flex-col justify-cemter items-center min-h-screen">
            <AddToDo/>
            <div>
                <TodoItem todos ={todos}/>
            </div>
        </div>
    )
}