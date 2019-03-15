# VUTTR - API 
>Esta api recebe dados do vuttr-front-end. salva num banco de dados mongodb, também registra um usuário para fazer buscas e inserções de dados. Está disponivel um arquivo dockerfile que "builda" uma imagem que contêm a api e uma uma imagem do mongodb.

## Building the images for the first time
```
$ docker-compose build
```
### Starting the container
```
$ docker-compose up
```

## libraries and technologies used 
* [x] **[Node.JS](https://nodejs.org)** v10.x.x
* [x] **[Express](https://github.com/expressjs/express)**
* [x] [MongoDB](https://www.mongodb.com/) with [Mongoose](https://github.com/Automattic/mongoose)


# For use without docker

### Install dependencies

```
$ npm install
```

### change db connection string

```javascript
mongoose.connect('mongodb://vuttr-db:27017/vuttr', { useNewUrlParser: true });
```

to

```javascript
mongoose.connect('mongodb://localhost:27017/vuttr', { useNewUrlParser: true });

```
## Using the application
### Para  adicionar um o usuário de teste (user: "adimin", password: "123456"), acesse a url "/user". Exemplo:

```
 http://localhost:3000/user
```

### Possible answers

## resp 200 

```
{
    'User admin registred'
}
```
## 401 

```
{
    'Username not available'
}
```
