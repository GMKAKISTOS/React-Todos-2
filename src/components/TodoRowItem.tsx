import React from "react"

interface NewTodoFormProps 
{
  rowNumber: number
  rowDescription: string
  rowAssigned: string
  deleteTodo: Function
}

/*function*/ export const TodoRowItem: /*=*/ React.FC<NewTodoFormProps> = (props/*: NewTodoFormProps*/ /* {
  rowNumber: number
  rowDescription: string
  rowAssigned: string
  deleteTodo: Function
}*/) =>
{
    
    return(
     <tr onClick = {() => props.deleteTodo(props.rowNumber)}>
        <th scope = "col">{props.rowNumber}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
    </tr>
    )
}

//export default TodoRowItem


