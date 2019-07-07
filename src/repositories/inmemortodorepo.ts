import { ITodoRepository } from './todorepository';
import { Todo } from '../models/todo';

export class InMemoryRepo implements ITodoRepository {

    private _todos: Todo[] = [];
    private _nextId = 1;

    async getAll(): Promise<Todo[]> {
        return this._todos;
    }
    async get(todoId: number): Promise<Todo> {
        const todo = this._todos.find(item => item.id === todoId);
        return todo;
    }
    async create(todo: Todo): Promise<Todo> {
        todo.isFinished = false;
        todo.id = this._nextId;

        this._todos.push(todo);

        this._nextId++;

        return todo;
    }
    async update(todoId: number, todo: Todo): Promise<Todo> {
        const { name, isFinished } = todo;
        const oldTodo = await this.get(todoId);

        oldTodo.name = name;
        oldTodo.isFinished = isFinished;

        return oldTodo;
    }
    async delete(todoId: number): Promise<Todo> {
        const todo = await this.get(todoId);

        this._todos = this._todos.filter(item => item.id !== todoId);

        return todo;
    }
}