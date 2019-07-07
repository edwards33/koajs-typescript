import { Todo } from "../models/todo";

export interface ITodoRepository{
    getAll(): Promise<Todo[]>;
    get(todoId: number): Promise<Todo>;
    create(todo: Todo): Promise<Todo>;
    update(todoId: number, todo: Todo): Promise<Todo>;
    delete(todoId: number): Promise<Todo>;
}