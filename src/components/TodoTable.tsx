import React from "react"
import /*TodoRowItem*/ {TodoRowItem} from "./TodoRowItem"
import { TodoModel } from "../models/TodoModel"

/*interface Todo {
  rowNumber: number
  rowDescription: string
  rowAssigned: string
}

interface NewTodoFormProps {
  todos: Todo[]
  deleteTodo: Function
}*/

/*function*/ export const TodoTable: React.FC<{todos: TodoModel[], deleteTodo : Function}> = (props/*: {todos: TodoModel[], deleteTodo : Function}*//*NewTodoFormProps*/) =>
{
return (
    <table className = "table table-hover">
        <thead>
            <tr>
                <th scope = "col">#</th>
                <th scope = "col">Description</th>
                <th scope = "col">Assigned</th>
            </tr>
            </thead>
            <tbody>
                    {props.todos.map(todo => (
                      <TodoRowItem
                      key = {todo.rowNumber}
                      rowNumber = {todo.rowNumber}
                      rowDescription = {todo.rowDescription}
                      rowAssigned = {todo.rowAssigned}
                      deleteTodo = {props.deleteTodo}
                      />
                    ))}
            </tbody>
    </table>
)
}

//export default TodoTable