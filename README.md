# Pós-Resolução

* WS disponível na porta `8080`
* HTTP na porta `3333`
```bash
npm start #Inicia a aplicação
npm run start:dev #Inicia a aplicação no modo desenvolvimento (Hot Reloading)
```

## Rotas

* `POST` */messages*
```json
{
  "author": "João",
  "message": "Olá mundo"
}
```

* `DELETE` */messages/:author/:id*
  - `author`: nome do autor da mensagem
  - `id`: id da mensagem

* `GET` */messages*
Recupera todas as mensagens já enviadas.

---

# Especificações do desafio

## Descrição

Criar um sistema de chat simples.

<blockquote>
Este projeto tem apenas fins de avaliação dos candidatos a desenvolvedor da Hitechline.
</blockquote>

<br/>

## Funcionalidades
- Rotas
  - Criação da Mensagem
  - Listagem das Mensagens em detrminado chat
  - Apagar mensagem somente pelo autor

<br/>

## Requisitos
- Typescript
- Utilização da biblioteca [WS](https://www.npmjs.com/package/ws) / ja vem pré instalada no projeto*
- Envio de mensagens em tempo real para os clients conectados

<br/>

## Observações
- O armazenamento poderá ser feito na memória (simulando um banco de dados)
- Poderá ser feito sem paginação
- O Autor não precia ser uma entidade, sendo referenciado sómente pelo nome.
- Não é necessário um frontend web, sendo apenas testado pelas proprias rotas
