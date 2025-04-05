// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// const postsDir = path.join(__dirname, 'posts');

// // Убедись, что папка posts существует
// if (!fs.existsSync(postsDir)) {
//   fs.mkdirSync(postsDir);
// }

// function generateSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, '-')
//     .replace(/[^\w\-]+/g, '');
// }

// // Главная: форма
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// // Создание поста
// app.post('/create', (req, res) => {
//   const { title, content } = req.body;
//   const baseSlug = generateSlug(title);

//   // Проверка на уникальность
//   let slug = baseSlug;
//   let counter = 1;
//   while (fs.existsSync(path.join(postsDir, `${slug}.json`))) {
//     slug = `${baseSlug}-${counter}`;
//     counter++;
//   }

//   const post = { title, content, slug };
//   fs.writeFileSync(
//     path.join(postsDir, `${slug}.json`),
//     JSON.stringify(post, null, 2),
//     'utf8'
//   );

//   res.redirect(`/post/${slug}`);
// });

// // Просмотр поста по slug
// app.get('/post/:slug', (req, res) => {
//   const filePath = path.join(postsDir, `${req.params.slug}.json`);

//   if (!fs.existsSync(filePath)) {
//     return res.status(404).send('Post not found');
//   }

//   const post = JSON.parse(fs.readFileSync(filePath, 'utf8'));

//   res.send(`
//     <h1>${post.title}</h1>
//     <p>${post.content}</p>
//     <a href="/">← Back</a>
//   `);
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
