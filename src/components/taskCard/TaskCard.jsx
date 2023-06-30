import "./estilos.scss";
export const TaskCard = ({ task }) => {
  return (
    <div className="contenedor-post-registro">
      <h1>Registro de datos exitoso</h1>
      <ul className="lista-registro">
        <li><h1>Fecha de registro:</h1>{task.fecha}</li>
        <li><h1>Dni:</h1>{task.identidad}</li>
        <li><h1>Nombre:</h1>{task.nombre}</li>
        <li><h1>Medio de pago que  usó:</h1>{task.medioPago}</li>
        <li><h1>Celular:</h1> {task.celular}</li>
        <li><h1>Premio que te gustaría ganar:</h1> {task.mensaje}</li>
      </ul>
      <h1>Felicidades, ya eres suscriptor de Sonqu!</h1>
    </div>
  );
};
