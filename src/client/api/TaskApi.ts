import { Task } from '../../commons/types/Task.type';
import { TaskInterface } from '../interfaces/TaskInterface';

import ApiClient from './ApiClient';

const url = 'tasks';

async function getTasks(): Promise<Task[]> {
  const { data } = await ApiClient.get<Task[]>(url);
  return data;
}

async function getTasksByUserId(userId: string): Promise<Task[]> {
  const { data } = await ApiClient.get<Task[]>(`${url}?userId=${userId}`);
  return data;
}

async function createTask({ name, description, userId }: TaskInterface): Promise<Task> {
  const { data } = await ApiClient.post<Task>(url, {
    name,
    description,
    userId,
  });
  return data;
}

async function updateTask(params: Task): Promise<Task> {
  const { data } = await ApiClient.put<Task>(`${url}/${params.id}`, params);
  return data;
}

async function deleteTask(id: string): Promise<string> {
  await ApiClient.delete<Task>(`${url}/${id}`);
  return id;
}

async function deleteAllTasks(userId: string): Promise<void> {
  await ApiClient.delete(`${url}?userId=${userId}`);
}

async function deleteAllCompletedTasks(userId: string): Promise<void> {
  await ApiClient.delete(`${url}?userId=${userId}&isDone=true`);
}

export default {
  getTasks,
  getTasksByUserId,
  createTask,
  deleteTask,
  updateTask,
  deleteAllCompletedTasks,
  deleteAllTasks,
};
