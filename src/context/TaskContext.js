"use client";
import { createContext, useContext, useState } from "react";
import {v4 as uuid} from 'uuid'

//se exporta para utilizar en todas las paginas

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("Deberia tener un provider");
    return context;
};

export const TaskProvider = ({ children }) => {
   const [tasks, setTasks]= useState([])

    const createTask= (fecha,nombre, identidad, celular,medioPago, mensaje, extraDni ) =>{
        setTasks([...tasks,{
            fecha,
            nombre,
            identidad,
            celular,
            medioPago,
            mensaje,
            extraDni,
            id:uuid()
        }]);
        
    }
    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
