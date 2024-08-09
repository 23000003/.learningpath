"use client"

import { DeleteOutlined } from '@ant-design/icons'
import { Card, Checkbox } from "antd";
import { DeleteToDo } from '../actions/actions';

export default function TodoItem({todos}){


    return(
        <>
        {todos.length > 0 && (
            todos.map((todo, index) => (
                <div key={index}>
                    <Card className="w-[300px]">
                        <div className="flex gap-2 items-center justify-between">
                            <Checkbox
                                checked={todo.isChecked}

                            />
                            <p>{todo.todoName}</p>
                            <div className="flex gap-2" onClick={() => DeleteToDo(todo.id)}>
                                <DeleteOutlined
                                    className="cursor-pointer"
                                    style={{ color: "#eb2f96" }}
                                />
                                <button>Delete</button>
                            </div>
                        </div>
                    </Card>
                </div>
            ))
        )}
        </>
    )
}