export const TaskCard = ({ task, onDragStart }) => {
    return (
        <div
            draggable
            onDragStart={(e) => onDragStart(e, task.id)}
            className="task-card"
        >
            <h4>{task.title}</h4>
            <p>{task.description}</p>
        </div>
    );
};