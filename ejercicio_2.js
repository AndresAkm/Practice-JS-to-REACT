// 2. Transformación de Listas (.map(), .filter(), .find())

const tareas = [
  { id: 1, titulo: 'Configurar entorno', completada: true, prioridad: 'alta' },
  { id: 2, titulo: 'Crear componentes', completada: false, prioridad: 'alta' },
  { id: 3, titulo: 'Estilar botones', completada: false, prioridad: 'baja' },
  { id: 4, titulo: 'Conectar API', completada: false, prioridad: 'media' }
];

// Ejercicio 2.1 (Eliminar sin mutar): Crea una función eliminarTarea(lista, idEliminar) 
// usando .filter() que retorne un nuevo arreglo sin la tarea cuyo id coincida.

function deleteTask(lista, idEliminar){
    const newTaskList = lista.filter(task => task.id !== idEliminar) // filter funciona como colador, si no se cumple la condicion, lo descarta en el nuevo array
    return newTaskList // El return se puede hacer directamente en la sentencia de arriba, pero me gusta usar variables intermedias para identificar más facilmente el proceso
}
 
const newTaskList = deleteTask(tareas, 2)

// console.log("Array sin mutar", tareas)
// console.log("Array nuevo modificado", newTaskList)

// Ejercicio 2.2 (Alternar estado): Crea una función toggleCompletada(lista, idTarea) usando .map() 
// y el operador spread (...) que devuelva un nuevo arreglo donde solo la tarea con ese id tenga invertido su valor booleano completada
// (!tarea.completada), dejando las demás intactas.

function toggleComplete(lista, idTarea) {
    return lista.map(task => {
        if (task.id === idTarea){
            return {...task,    // La clonacion es parcial, nunca se clona lista en este caso, se clona cada objeto dentro de lista y se re configura en un nuevo array
                completada: !task.completada
            }
        } else {
            return task
        }
    }) 
}

const newList = toggleComplete(tareas, 4)
// console.log("Tarea modificada", newList)

// Ejercicio 2.3 (Simulación de renderizado): Filtra las tareas que no estén completadas y transfórmalas con
//  .map() en un arreglo de strings con el formato: "[ALTA] Crear componentes" (nota la prioridad en mayúsculas).

function taskFilter(lista){
    return taskNotComplete = lista.filter(task => task.completada === false).map(task => { 
            return `[${task.prioridad.toUpperCase()}] ${task.titulo}`   // Se puede encadenar filter y map usando la misma variable ya que todo se hereda directamente
        }
)}

const taskFiltered = taskFilter(tareas)
console.log(taskFiltered)