<center>
<img src="/node.png" alt="node" width="200"/>
</center>

# API-Cadastros

🧑‍💻

### Cadastro de Tags(elogios possíveis)

[ x ] Nao e permitido cadastra Tags sem nome
[ x ] Nao e permitido cadastra mais de uma Tag com o mesmo nome
[ x ] Somente usuário administrador

### Cadastro de elogios

[ ] ID do usuário que está recebendo elogios
[ ] ID do usuário que esta enviando o elogio
[ ] ID da Tag
[ ] Data de criação

### Autenticação de usuário

[ ] Gerar token JWT
[ ] Validar usuário logando nas rotas necessário

[ ] Listagem de usuários
[ ] Listagem de Tags
[ ] Listagem de elogios por usuário

```ts
const express require('express')
const app = express()
const PORT = 3000

app.get('/',(req, res) =>{
    res.send('bruuuuuuuw!')

    app.listen(PORT, () =>{
        console.log(`Server is running on ${PORT}` )
    })
})

```

# Node.js

- **Node.js** é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador.

nodejs.org

# ORM

### Object–relational mapping

- O mapeamento objeto-relacional (ferramenta de mapeamento ORM, O / RM e O / R) em ciência da computação é uma técnica de programação para converter dados entre sistemas de tipos incompatíveis usando linguagens de programação orientadas a objetos. Isso cria, com efeito, um "banco de dados de objetos virtuais" que pode ser usado a partir da linguagem de programação.
  Existem pacotes gratuitos e comerciais disponíveis que realizam mapeamento objeto-relacional, embora alguns programadores optem por construir suas próprias ferramentas ORM.

- Na programação orientada a objetos, as tarefas de gerenciamento de dados atuam em objetos que quase sempre são valores não escalares. Por exemplo,
  considere uma entrada do catálogo de endereços que representa uma única pessoa junto com zero ou mais números de telefone e zero ou mais endereços. Isso poderia ser modelado em uma implementação orientada a objetos por um "objeto Pessoa" com um atributo / campo para conter cada item de dados que a entrada compreende: o nome da pessoa, uma lista de números de telefone e uma lista de endereços
- A própria lista de números de telefone conteria "objetos PhoneNumber" e assim por diante. Cada entrada do catálogo de endereços é tratada como um único objeto pela linguagem de programação (ela pode ser referenciada por uma única variável contendo um ponteiro para o objeto, por exemplo). Vários métodos podem ser associados ao objeto,
  como métodos para retornar o número de telefone preferido, o endereço residencial e assim por diante.

- Por outro lado, muitos produtos de banco de dados populares, como sistemas de gerenciamento de banco de dados SQL (DBMS), não são orientados a objetos e só podem armazenar e manipular valores escalares, como inteiros e strings organizados em tabelas.
  O programador deve converter os valores do objeto em grupos de valores mais simples para armazenamento no banco de dados (e convertê-los de volta na recuperação) ou usar apenas valores escalares simples dentro do programa. O mapeamento objeto-relacional implementa a primeira abordagem.
  O cerne do problema envolve traduzir a representação lógica dos objetos em uma forma atomizada que seja capaz de ser armazenada no banco de dados enquanto preserva as propriedades dos objetos e seus relacionamentos para que eles possam ser recarregados como objetos quando necessário. Se esta funcionalidade de armazenamento e recuperação for implementada,
  os objetos são considerados persistentes.

  ormconfg.json

  ```json
  {
    "type": "sqlite",
    "database": "src/database/database.sqlite",
    "migrations": ["src/database/migrations/*.ts"],
    "entities": ["src/entities/*.ts"],
    "cli": {
      "migrationsDir": "src/database/migrations",
      "entitiesDir": "src/entities"
    }
  }
  ```

  # Typeorm

- TypeORM é um ORM que pode ser executado nas plataformas NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo e Electron e pode ser usado com TypeScript e JavaScript (ES5, ES6, ES7, ES8).
- Seu objetivo é sempre oferecer suporte aos recursos JavaScript mais recentes e fornecer recursos adicionais que o ajudem a desenvolver qualquer tipo de aplicativo que use bancos de dados - desde pequenos aplicativos com algumas tabelas até aplicativos corporativos de grande escala com vários bancos de dados.

- TypeORM suporta os padrões Active Record e Data Mapper,
  ao contrário de todos os outros ORMs JavaScript existentes atualmente, o que significa que você pode escrever aplicativos de alta qualidade, fracamente acoplados, escaláveis ​​e sustentáveis ​​da maneira mais produtiva.

- TypeORM é altamente influenciado por outros ORMs, como Hibernate, Doctrine e Entity Framework.

# Migrations

- As migrações são como o controle de versão do seu banco de dados.
- Ele é usado para modificar e compartilhar o esquema de banco de dados do aplicativo. Esta seção explica como as migrações funcionam no TypeORM.

* ormconfig.json

```json
"type": "mysql",
"host": "localhost",
"port": 8889,
"username": "root",
"password": "root",
"database": "Library",
"entities": ["entity/*.js"], "migrationsTableName": "student_migration_table", "migrations": ["migration/*.js"], "cli": {
   "migrationsDir": "migration"
```

# TypeScript

- TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft.
- É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
- Tipos fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documentação e permitindo que o TypeScript valide se seu código está funcionando corretamente.
  typescriptlang.org

tsconfig.json

```json
{
"compilerOptions": {
  "target": "es5"
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
  "module": "commonjs" ,
  "esModuleInterop": true,
  "strictPropertyInitialization": false
}
}
```

# SQLite

- SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido.
- Programas que usam a biblioteca SQLite podem ter acesso a banco de dados SQL sem executar um processo SGBD separado. - SQLite não é uma biblioteca cliente usada para conectar com um grande servidor de banco de dados, mas sim o próprio servidor. \
- A biblioteca SQLite lê e escreve diretamente no arquivo de banco de dados no disco.Wikipedia (PT)

sqlite.org

# yarn

Introdução
Yarn é um novo gerenciador de pacotes JavaScript de código aberto desenvolvido pelo Facebook. O Yarn é totalmente compatível com o registro npm e pode funcionar junto com o npm, mas tem como objetivo ser uma alternativa mais segura, mais segura e confiável.

Você pode substituir todo o seu fluxo de trabalho npm pelo Yarn para projetos novos ou atuais com o mínimo de esforço.
As dependências no Yarn são mantidas em um arquivo yarn.lock que deve ser verificado em seu controle de origem, mas o arquivo em si é apenas para o Yarn e não deve ser editado. Aqui, apenas o suficiente para você começar com o Yarn.

Instalando o Yarn Package Manager
Existem algumas maneiras de instalar o Yarn. Você pode, ironicamente, instalá-lo por meio do npm:

```
npm install -g yarn
```
