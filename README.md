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
