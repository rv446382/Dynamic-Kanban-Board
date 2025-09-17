// components/TaskForm.jsx
import { useState } from 'react';

export const TaskForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onSubmit({
            id: Date.now().toString(),
            title: title.trim(),
            description: description.trim(),
            status: 'todo', 
        });

        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};