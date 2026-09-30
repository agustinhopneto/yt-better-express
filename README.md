<div align="center">

# 🛡️ 4 Erros Comuns ao Criar APIs com Express

**Boas práticas para deixar sua API Express mais segura, rápida e robusta.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

[![YouTube](https://img.shields.io/badge/Assista_no_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=3cWtiTueh00)
[![DevClub PRO](https://img.shields.io/badge/Canal-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO)

</div>

---

## 🎬 Vídeo

Este repositório acompanha o vídeo do canal **[DevClub PRO](https://www.youtube.com/@DevClubPRO)**:

<div align="center">

<a href="https://www.youtube.com/watch?v=3cWtiTueh00" title="4 Erros Comuns Que Devem Ser Evitados ao Criar APIs com Express">
  <img src="https://img.youtube.com/vi/3cWtiTueh00/maxresdefault.jpg" alt="4 Erros Comuns Que Devem Ser Evitados ao Criar APIs com Express" width="720" />
</a>

**▶️ [4 Erros Comuns Que Devem Ser Evitados ao Criar APIs com Express](https://www.youtube.com/watch?v=3cWtiTueh00)**

</div>

## 📖 Sobre

Uma API Express enxuta que aplica, na prática, as correções para erros comuns em projetos Express: CORS aberto, falta de headers de segurança, respostas sem compressão e tratamento de erros espalhado.

## 🎯 O que você vai aprender

- **CORS restrito** com `cors`: origens, métodos e headers permitidos
- **Headers de segurança** com `helmet`
- **Compressão de respostas** com `compression`
- **Tratamento de erros centralizado** com classes de erro (`AppError`, `NotFoundError`) e um middleware de erro

## 🧪 Testando

```bash
# Sucesso: retorna uma lista (comprimida) de 100 itens
curl -X POST localhost:3333 -H "Content-Type: application/json" -d '{}'

# Erro de aplicação (404)
curl -X POST localhost:3333 -H "Content-Type: application/json" -d '{"appError":true}'

# Erro inesperado (500)
curl -X POST localhost:3333 -H "Content-Type: application/json" -d '{"error":true}'
```

## 🚀 Como rodar

> Pré-requisito: [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone o repositório
git clone https://github.com/agustinhopneto/yt-better-express.git
cd yt-better-express

# 2. Instale as dependências
npm install

# 3. Rode o servidor
npm run dev
```

Acesse **http://localhost:3333** 🎉

## 🛠️ Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

---

<div align="center">

Curtiu? Deixa um ⭐ no repositório e se inscreva no canal!

[![Inscreva-se](https://img.shields.io/badge/Inscreva--se-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO?sub_confirmation=1)

Feito com 💙 por **[Agustinho Neto](https://github.com/agustinhopneto)**

</div>
