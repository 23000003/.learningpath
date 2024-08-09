"use client"
import { useState } from "react";
import { Button, Input } from "antd"
import { CreateTodo } from "../actions/actions";

export default function AddToDo(){

    const [todoInput, setTodo] = useState("");

    return(
        <form action={CreateTodo} className="flex gap-2">
            <Input name="todoName" onChange={(e) => setTodo(e.target.value)}></Input>
            <Button type="primary" htmlType="submit">Add Todo</Button>
        </form>
    )
}