const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const empresaRoutes = require("./routes/empresaRoutes");
const alunoRoutes = require("./routes/alunoRoutes");
const tccRoutes = require("./routes/tccRoutes");
const pesquisaRoutes = require("./routes/pesquisaRoutes");
const cursosRoutes = require("./routes/cursosRoutes");

app.use("/cursos", cursosRoutes);

const app = express();


// ======================
// CORS (TEM QUE VIR AQUI)
// ======================
app.use(cors({
    origin: [
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


// ======================
// MIDDLEWARE
// ======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ======================
// ROTAS
// ======================
app.get("/", (req, res) => {
    res.status(200).json({
        sistema: "TCC API",
        status: "Online"
    });
});

app.use(authRoutes);
app.use("/empresas", empresaRoutes);
app.use("/alunos", alunoRoutes);
app.use("/tccs", tccRoutes);

app.use("/uploads", express.static("src/uploads"));
app.use("/pesquisa", pesquisaRoutes);


module.exports = app;