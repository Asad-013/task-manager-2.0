import Calendar from '@/components/Calendar';
import TaskList from '@/components/TaskList';
import AddTaskButton from '@/components/AddTaskButton';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Task Manager</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Calendar />
        </div>
        <div>
          <AddTaskButton />
          <TaskList />
        </div>
      </div>
    </div>
  );
}