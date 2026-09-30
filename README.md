<div align="center">

# 🛡️ 4 Common Mistakes When Building APIs with Express

**Best practices to make your Express API more secure, faster and more robust.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

[![YouTube](https://img.shields.io/badge/Watch_on_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=3cWtiTueh00)
[![DevClub PRO](https://img.shields.io/badge/Channel-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO)

</div>

---

## 🎬 Video

This repository accompanies a video from the **[DevClub PRO](https://www.youtube.com/@DevClubPRO)** channel:

<div align="center">

<a href="https://www.youtube.com/watch?v=3cWtiTueh00" title="4 Common Mistakes to Avoid When Building APIs with Express">
  <img src="https://img.youtube.com/vi/3cWtiTueh00/maxresdefault.jpg" alt="4 Common Mistakes to Avoid When Building APIs with Express" width="720" />
</a>

**▶️ [4 Common Mistakes to Avoid When Building APIs with Express](https://www.youtube.com/watch?v=3cWtiTueh00)**

<sub>🇧🇷 The video is in Brazilian Portuguese.</sub>

</div>

## 📖 About

A lean Express API that puts into practice the fixes for common mistakes in Express projects: wide-open CORS, missing security headers, uncompressed responses and scattered error handling.

## 🎯 What you’ll learn

- **Restricted CORS** with `cors`: allowed origins, methods and headers
- **Security headers** with `helmet`
- **Response compression** with `compression`
- **Centralized error handling** with error classes (`AppError`, `NotFoundError`) and an error middleware

## 🧪 Testing

```bash
# Success: returns a (compressed) list of 100 items
curl -X POST localhost:3333 -H "Content-Type: application/json" -d '{}'

# Application error (404)
curl -X POST localhost:3333 -H "Content-Type: application/json" -d '{"appError":true}'

# Unexpected error (500)
curl -X POST localhost:3333 -H "Content-Type: application/json" -d '{"error":true}'
```

## 🚀 Getting started

> Prerequisite: [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone the repository
git clone https://github.com/agustinhopneto/yt-better-express.git
cd yt-better-express

# 2. Install the dependencies
npm install

# 3. Start the server
npm run dev
```

Open **http://localhost:3333** 🎉

## 🛠️ Tech stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

---

<div align="center">

Enjoyed it? Leave a ⭐ on the repo and subscribe to the channel!

[![Subscribe](https://img.shields.io/badge/Subscribe-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO?sub_confirmation=1)

Made with 💙 by **[Agustinho Neto](https://github.com/agustinhopneto)**

</div>
