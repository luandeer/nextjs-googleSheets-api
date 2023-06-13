"use client"
import { useTasks } from "@/context/TaskContext"
import { TaskCard } from "../taskCard/TaskCard"
const Prueba = () => {
    const {tasks} = useTasks()
  return (
    <div>
      {
        tasks.map(task => (
            <TaskCard task ={task} key={task.id}/>
        ))
        }</div>
  )
}

export default Prueba