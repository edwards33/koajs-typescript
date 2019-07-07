import * as Router from 'koa-router';
import { TodoService } from '../services/todoservice';
import { InMemoryRepo } from '../repositories/inmemortodorepo';
import { Todo } from '../models/todo';

const router = new Router();
const service = new TodoService(new InMemoryRepo());

router.get('/todos', async (ctx) => {
    ctx.status = 200;
    ctx.body = await service.getAllTodos();
});

router.get('/todos/:id', async (ctx) => {
    const todo = await service.getTodo(Number(ctx.params.id));

    if(todo){
        ctx.status = 200;
        ctx.body = todo;
    }
    else{
        ctx.throw(404);
    }
});

router.post('/todos', async (ctx) => {
    const todo = <Todo>ctx.request.body;
    const newTodo = await service.createTodo(todo);

    ctx.status = 201;
    ctx.body = newTodo;
    ctx.set('location', 'http://localhost:3000/todos/' + newTodo.id);
});

router.put('/todos/:id', async (ctx) => {
    const todo = <Todo>ctx.request.body;
    const updatedTodo = await service.updateTodo(Number(ctx.params.id), todo);

    if(updatedTodo) {
        ctx.status = 200;
        ctx.body = updatedTodo;
    }else {
        ctx.throw(404);
    }
});

router.delete('/todos/:id', async (ctx) => {
    const deletedTodo = await service.deleteTodo(Number(ctx.params.id));

    if(deletedTodo) {
        ctx.status = 200;
        ctx.body = deletedTodo;
    }else {
        ctx.throw(404);
    }
});

export default router;