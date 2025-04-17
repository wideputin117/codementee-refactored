import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/api/users', createProxyMiddleware({
  target: 'http://user-service:3001',
  changeOrigin: true,
  pathRewrite: { '^/api/users': '' }
}));

app.use('/api/sessions', createProxyMiddleware({
  target: 'http://session-service:3002',
  changeOrigin: true,
  pathRewrite: { '^/api/sessions': '' }
}));

app.listen(3000, () => console.log('API Gateway on 3000'));
