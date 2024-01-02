const express = require("express");
const { randomUUID } = require("crypto");
const fs = require("fs");
const app = express();

app.use(express.json());

// Array para criar os produtos (sem banco de dados)
let products = [];

fs.readFile("products.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        products = JSON.parse(data);
    }
});

app.post("/products", (request, response) => {
    const { name, price } = request.body;

    if (!name || !price) {
        return response.status(400).json({ error: "Nome e preço são obrigatórios" });
    }

    const product = {
        name,
        price,
        id: randomUUID(),
    };

    products.push(product);

    createProductFile(); // Chama a função para escrever no arquivo

    return response.json(product);
});

app.get("/products/:id", (request, response) => {
    const { id } = request.params;
    const product = products.find(product => product.id === id);

    if (!product) {
        return response.status(404).json({ error: "Produto não encontrado" });
    }

    return response.json(product);
});

app.put("/products/:id", (request, response) => {
    const { id } = request.params;
    const { name, price } = request.body;

    const productIndex = products.findIndex((product) => product.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name,
        price,
    };
    createProductFile(); // Chama a função para escrever no arquivo
    return response.json({ message: "Produto alterado com sucesso" });
});

app.delete("/products/:id", (request, response) => {
    const { id } = request.params;

    const productIndex = products.findIndex((product) => product.id === id);

    products.splice(productIndex, 1);
    createProductFile(); // Chama a função para escrever no arquivo
    return response.json({ message: "Produto removido com sucesso!" });
});

function createProductFile() {
    fs.writeFile("products.json", JSON.stringify(products, null, 2), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Produto inserido");
        }
    });
}

app.listen(4002, () => console.log("Servidor está rodando na 4002"));
