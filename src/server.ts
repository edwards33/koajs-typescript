import * as Koa from 'koa';
import * as Router from 'koa-router';
import todosRouter from './routes/todos';
const bodyparser = require('koa-bodyparser');

import logger = require('koa-logger');

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(bodyparser());

router.get('/', async (ctx) => {
    ctx.body = 'hi there!!!';
});

app.use(router.routes());
app.use(todosRouter.routes());

app.listen(1234);

console.log('server is up and listening on port 1234');