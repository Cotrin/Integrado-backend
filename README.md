#  Iniciando a configuração em uma nova máquina

## Download do repositório 

```bash
git clone https://github.com/Cotrin/Integrado-backend.git
```
## Download dos módulos NodeJs

```bash
npm install
```

## Criação de um arquivo .env

```
DATABASE_URL=mongodb+srv://<username>:<password>@integradoapi.zjwxfhk.mongodb.net/integradoApi?retryWrites=true&w=majority
```
- Esse arquivo .env estabelece a URL de conexão entre a database MongoDB e a API usando o Prisma ORM 
  - `<username>` e `<password>` de acesso ao banco de dados serão enviados no email em conjunto com o link deste repositório


## Inicie o script para popular o banco de dados MongoDB

```bash
npm run populate-database
```
 - Esse script deletará todos os arquivos presentes no banco de dados e adicionará as universidades presentes na API fornecida dos seguintes países
   ```js
    const countries = ['argentina', 'brazil', 'chile', 'colombia', 'paraguay', 'peru', 'suriname', 'uruguay']
    ```
   - Caso queira adicionar novos países ao script de população do Banco de dados só é necessário adicionar o nome do país neste array.

## Inicialização da API RESTful

<!-- trocar -->
```bash
npm start 
```

## Métodos de requisição HTTP - Rotas

```
GET    - http://localhost:3333/universities
GET    - http://localhost:3333/universities/:id
POST   - http://localhost:3333/universities
PUT    - http://localhost:3333/universities/:id
DELETE - http://localhost:3333/universities/:id
```
  - Caso queira importar as requests para algum software de requisições (Postman, Insomnia) existe um arquivo `Insomnia_httpRequests.json` na raiz do projeto.
