import { ITodoRepository } from './../repositories/todorepository';
import { Todo } from '../models/todo';

export class TodoService {
    private todoRepo: ITodoRepository;

    constructor(todoRepository: ITodoRepository) {
        this.todoRepo = todoRepository;
    }

    async getAllTodos(): Promise<Todo[]> {
        return await this.todoRepo.getAll();
    }

    async getTodo(todoId: number): Promise<Todo> {
        return await this.todoRepo.get(todoId);
    }

    async createTodo(todo: Todo): Promise<Todo> {
        return await this.todoRepo.create(todo);
    }

    async updateTodo(todoId: number, todo: Todo): Promise<Todo> {
        return await this.todoRepo.update(todoId, todo);
    }

    async deleteTodo(todoId: number): Promise<Todo> {
        return await this.todoRepo.delete(todoId);
    }

}