import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Karena ES Module tidak punya __dirname bawaan,
// ini trik untuk membuat __dirname sendiri
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Middleware untuk membaca data form (application/x-www-form-urlencoded)
// extended: true → bisa membaca data kompleks (object / array)
app.use(bodyParser.urlencoded({ extended: true }));

// Route GET "/" → ketika user buka http://localhost:3000/
// server akan mengirim file index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Route POST "/submit"
// Biasanya dipanggil dari <form action="/submit" method="POST">
app.post("/submit", (req, res) => {
  // Menampilkan data yang dikirim dari form ke terminal
  console.log(req.body);

  // Idealnya kasih response ke client
  // res.send("Data diterima");
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
