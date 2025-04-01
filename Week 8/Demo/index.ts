import express, {Express, Response, Request} from 'express';

const app: Express = express();
const host: string = '127.0.0.1';
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

app.get('/hello', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

app.get('/hello2', (req: Request, res: Response) => {
  let myName: string = req.query.name;
  let myLastName: string = req.query.lastname;

  res.set('Content-Type', 'text/html');
  //res.set('Content-Type', 'application/json');
});

app.use((req: Request, res: Response) => {
  res.status(404).send('Not Found');
}

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
