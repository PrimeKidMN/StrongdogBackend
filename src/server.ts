import fastify from 'fastify';
import path from 'path';
import fastifyStatic from '@fastify/static';

const server = fastify({
  logger: true
});

server.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
  prefix: '/',
});

server.get('/*', (req, reply) => {
  reply.sendFile('index.html');
});

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3000;
    await server.listen({ port, host: '0.0.0.0' });
    server.log.info(`Server listening on port ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();