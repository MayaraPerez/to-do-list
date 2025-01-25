import { Itask } from '../interface/Itask';
import './taskStyle.css'

interface IpropsTask {
    task: Itask
    deleteTask(deleteTaskId: number):void
}

 export function MakeTask({task, deleteTask}: IpropsTask) {
    return (
        <div className="card">
            <div>
                <p>{task.name}</p>
            </div>

            <div className="line2" >
                <span onClick={() => deleteTask(task.id)} className="btn-card">X</span>
            </div>
        </div>
    );
}