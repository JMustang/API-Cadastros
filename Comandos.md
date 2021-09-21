# Comandos

1. yarn init -y |inicia o package.json
2. yarn add typescript -D |adiciona o typescript ao projeto
3. yarn add express |adiciona a biblioteca do express
4. yarn tsc --init |inicia o arquivo tsconfig.json
5. yarn add @types/express -D |adiciona as tipagens da lib express
6. yarn add ts-node-dev -D |adiciona o ts-node-dev ao projeto
7. yarn add typeorm reflect-metadata sqlite3 |adiciona o typeorm, reflect-metadata e o sqlite3 ao projeto
8. yarn add uuid
9. yarn add @types/uuid -D

-D = dependencia de desenvolvimento
-y = sim para todas as perguntas

- query builder
  . typeORM

- banco de dados
  . sqlite 3

- Executando as migrations

  1.yarn typeorm migration:create -n CreateUsers
  2.yarn typeorm migration:run

- criando as entidades

  1.yarn typeorm entity:create -n User
