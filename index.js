const Koa = require('koa');
const server = new Koa();
const DB = require('./info.json');
const PORT = 3000;

const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const serve = require('koa-static');

const router = new Router();

server.use(serve('./avatars'));
server.use(bodyParser());

const getUsers = ctx => {
  ctx.body = DB.users;
  ctx.status = 200;
};

router.get('/users', getUsers);

server.use(
  cors({
    origin: '*',
    allowHeaders: 'X-Requested-With, Content-Type, Origin',
    credentials: true,
  })
);

server
  .use(bodyParser())
  .use(cors())
  .use(router.routes())
  .listen(PORT, () => {
    console.log(`🚀 Server listening  🚀`);
  });
