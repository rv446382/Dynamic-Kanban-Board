import { TaskCard } from './TaskCard';

export const Column = ({ title, tasks, onDrop, onDragOver, onDragStart }) => {
    return (
        <div
            className="column"
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, title)}
        >
            <h3>{title}</h3>
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onDragStart={onDragStart}
                />
            ))}
        </div>
    );
};