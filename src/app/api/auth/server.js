// // server.js
// const { createServer } = require('http');
// const { parse } = require('url');
// const next = require('next');
// const nextAuth = require('next-auth');
// const nextAuthConfig = require('./next-auth-config');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   createServer(async (req, res) => {
//     const parsedUrl = parse(req.url, true);
//     const { pathname, query } = parsedUrl;

//     if (pathname === '/api/auth/[...nextauth]') {
//       await nextAuth(req, res, nextAuthConfig);
//     } else {
//       handle(req, res, parsedUrl);
//     }
//   }).listen(3000, (err) => {
//     if (err) throw err;
//     console.log('> Ready on http://localhost:3000');
//   });
// });