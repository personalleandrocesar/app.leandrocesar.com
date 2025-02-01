# leandrocesar.app
### Rota: `/form`


#### Método: POST
> Cadastro de clientes

Definindo o inputs do formulário:

- Nome
- Sobrenome
- Sexo
- Data de nascimento
- WhatsApp
- Serviço
- Usuário
- E-mail
- Senha
- Objetivo
- Dias p/ semana
- Tempo de Treino
- Dia do pagamento
- Início do Período
- Fim do Período

---

### Rota: `/admin`

#### Método: GET
#### Clientes

> Graficos de Cliente já cadastrados
> - Quantidade de clientes total    
> - Quantidade de clientes em cada Serviço
> - Quantidade de clientes em cada Serviço
> - Quantidade de clientes ativos
> - Quantidade de clientes Inativos

#### treinos

> Graficos de Cliente já cadastrados
> - Quantidade de treinos no total    

---

### Rota: `/admin/clientes`

#### Método: GET
> Lista de Cliente já cadastrados

#### Método: POST
> Cria um novo usúario!

Definindo o inputs do formulário:

- Nome
- Sobrenome
- Sexo
- Data de nascimento
- WhatsApp
- Serviço
- Usuário
- E-mail
- Senha
- Objetivo
- Dias p/ semana
- Tempo de Treino
- Início do Período
- Fim do Período
- Dia do vencimento
- Status

---

### Rota: `/admin/clientes/:id`

#### Método: GET
> Pegar os dados do cliente em mostrar na tela

O que aparecerá:

- Nome
- Sobrenome
- Sexo
- Data de nascimento
- WhatsApp
- Idade
- Usuário
- Serviço
- Objetivo
- Dias p/ semana
- Tempo de Treino
- Início do Período
- Fim do Período
- Dia do vencimento
- Status



## Métodos javascript

### Método 'replace()'


Para inverter a ordem de uma data no formato YYYY-MM-DD para DD-MM-YYYY usando o método replace do JavaScript, você pode usar uma expressão regular. Aqui está um exemplo de como fazer isso:

```javascript
const date = '1986-10-08';
const reversedDate = date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3-$2-$1');
console.log(reversedDate); // Output: 08-10-1986
``` 

eu usei apenas:

```javascript
.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3-$2-$1') 
```


slice(-1).reverse()

slice(0, qtTreinos.length - 1)



consigo via upload converter via express.js para um formato tipo webp?

não... o cliente quer fazer upload de qualquer formato de arquivo, seja .png, .jpg, .jpeg, quando for escolher um desses, na hora do upload, tem como converter umas desses formatos em .webp, e ficar salvo no servidor... para quando for servir pro app... aparecer só o formtato .webp?


const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Configuração do multer para o upload de arquivos (armazena em memória)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Função para salvar imagem convertida
const saveImageAsWebP = (buffer, filename) => {
  return sharp(buffer)
    .webp() // Converte para o formato WebP
    .toFile(filename); // Salva o arquivo no sistema
};

// Rota de upload
app.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  try {
    // Definindo o nome do arquivo WebP (baseado no nome original)
    const fileName = `${Date.now()}.webp`;
    const outputPath = path.join(__dirname, 'uploads', fileName);

    // Certificando-se de que a pasta "uploads" existe
    if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
      fs.mkdirSync(path.join(__dirname, 'uploads'));
    }

    // Convertendo a imagem e salvando no formato WebP
    await saveImageAsWebP(req.file.buffer, outputPath);

    // Retornando a resposta com o caminho do arquivo convertido
    res.json({ message: 'Imagem convertida para WebP e salva com sucesso!', file: outputPath });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao processar a imagem');
  }
});

// Rota para servir a imagem convertida em WebP
app.get('/images/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.params.filename);

  // Verifica se o arquivo WebP existe e serve
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Imagem não encontrada');
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

## para apagar o treino, depois de criar:
localStorage.clear();