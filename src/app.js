const express = require("express");

const authRoutes = require("./routes/authRoutes");
const empresaRoutes =
require("./routes/empresaRoutes");
const app = express();
const alunoRoutes =
require("./routes/alunoRoutes");
const tccRoutes =
require("./routes/tccRoutes");
const pesquisaRoutes =
require("./routes/pesquisaRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota inicial
app.get("/", (req, res) => {
    res.status(200).json({
        sistema: "TCC API",
        status: "Online"
    });
});

// Rotas
app.use(authRoutes);
app.use("/empresas", empresaRoutes);
app.use("/alunos", alunoRoutes);
app.use("/tccs", tccRoutes);
app.use(
    "/uploads",
    express.static("src/uploads")
);
app.use("/pesquisa", pesquisaRoutes);

module.exports = app;