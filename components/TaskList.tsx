"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  progress: number;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([
    { id: 1, title: 'Complete project proposal', completed: false, progress: 30 },
    { id: 2, title: 'Review team performance', completed: false, progress: 50 },
    { id: 3, title: 'Prepare presentation', completed: true, progress: 100 },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        {tasks.map(task => (
          <div key={task.id} className="flex items-center space-x-2 mb-4">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.title}
            </span>
            <Progress value={task.progress} className="w-1/4 ml-auto" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TaskList;