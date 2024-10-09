"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddTaskButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [taskTitle, setTaskTitle] = React.useState('');

  const handleAddTask = () => {
    // Here you would typically add the task to your state or database
    console.log('Adding task:', taskTitle);
    setTaskTitle('');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-title" className="text-right">
              Title
            </Label>
            <Input
              id="task-title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <Button onClick={handleAddTask} className="bg-blue-600 hover:bg-blue-700 text-white">
          Add Task
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskButton;