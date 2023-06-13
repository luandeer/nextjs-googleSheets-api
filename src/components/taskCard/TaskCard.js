export const TaskCard = ({task}) =>{
  return (
    <div>
                <h1>
                    {task.fecha}
                </h1>
                <p> {task.nombre}{task.celular}{task.mensaje}</p>
                <h1>Registro exitoso, ya eres suscriptor</h1>
            </div>
  )
}