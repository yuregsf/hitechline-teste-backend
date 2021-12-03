import express from 'express';
import WebSocket, { WebSocketServer } from 'ws';
import bp from 'body-parser'

const app = express();
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

interface IMessageBody {
  id: number,
  author: string,
  message: string
}


const wss = new WebSocketServer({ port: 8080 });

const messages: Array<IMessageBody> = new Array();
let users_id = 0;
let messages_id = 0;

wss.on('connection', function connection(ws) {
  users_id++;
  ws.send(`Usuário ${users_id} conectado`);
});

app.post('/messages', (req, res) => {
  const { message, author } = req.body
  messages_id++;
  messages.push({ id: messages_id, ...req.body })
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(`${author}: ${message}`)
    }
  })
  return res.status(200).send({ id: messages_id, ...req.body })
})

app.get('/messages', (_, res) => {
  res.send(messages)
})

app.delete('/messages/:author/:id', (req, res) => {
  const { author, id } = req.params;
  const idx = messages.findIndex(message => message.author === author && message.id === +id)
  if (idx >= 0) {
    messages.splice(idx, 1)
    res.status(200).send("Mensagem excluída com sucesso")
  }
  else {
    res.status(400).send("Usuário ou ID não encontrado")
  }
})


app.listen(3333, () => {
  console.log('app started on port 3333')
});
