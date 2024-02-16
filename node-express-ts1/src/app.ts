// import express, { Application } from 'express';
// import { router } from './app-routing'
// import cors from 'cors';
// import expressWs from 'express-ws';
// const app: Application = express();
// app.use(express.json());
// app.use(cors({ origin: 'http://localhost:4200' }));
// const wsInstance = expressWs(app);
// const port: number = 3000;
// app.listen(port, () => {
//     console.log('Server started');
// });

// app.use('/', router);

import express, { Application } from 'express';
import { router } from './app-routing'
import cors from 'cors';
import WebSocket from 'ws';
import expressWs from 'express-ws';
const app: Application = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
const wsInstance = expressWs(app);
const wss=new WebSocket(app:app)




const port: number = 3000;
app.listen(port, () => {
    console.log('Server started');
});


// app.use('/', router);