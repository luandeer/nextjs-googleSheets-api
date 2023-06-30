"use client"
import { useTasks } from "@/context/TaskContext"
import { TaskCard } from "../taskCard/TaskCard.jsx"
const Prueba = () => {
    const {tasks} = useTasks()
    const ultimaTarea = tasks[tasks.length - 1];

  return (
    <div>
      {ultimaTarea && <TaskCard task={ultimaTarea} key={ultimaTarea.id} />}
    </div>
  )
}

export default Prueba