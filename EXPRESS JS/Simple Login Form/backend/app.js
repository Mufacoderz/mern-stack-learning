const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// user dummy
const userDummy = {
    email: "admin@mail.com",
    password: "123456",
};

// route login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.json({ success: false, msg: "Email/password wajib diisi" });
    if (email !== userDummy.email)
        return res.json({ success: false, msg: "Email tidak terdaftar" });
    if (password !== userDummy.password)
        return res.json({ success: false, msg: "Password salah" });

    res.json({ success: true, msg: "Login berhasil" });
});

app.listen(PORT, () => console.log(`BE running at http://localhost:${PORT}`));
