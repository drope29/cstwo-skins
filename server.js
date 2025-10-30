const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// Middleware para habilitar o CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/prices', async (req, res) => {
    const apiKey = process.env.STEAM_API_KEY;
    const marketHashNames = req.query.market_hash_names;

    if (!apiKey) {
        return res.status(500).json({ success: false, message: 'A chave da API da Steam não está configurada.' });
    }

    if (!marketHashNames) {
        return res.status(400).json({ success: false, message: 'Nenhuma skin especificada.' });
    }

    const url = `https://api.steamwebapi.com/ISteamMarket/GetAssetPrices/v1/?key=${apiKey}&appid=730&market_hash_names=${marketHashNames}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.success) {
            // Converte os preços de centavos para dólares
            const prices = {};
            data.result.assets.forEach(asset => {
                prices[asset.name] = asset.price / 100;
            });
            res.json({ success: true, prices });
        } else {
            res.status(500).json({ success: false, message: 'Erro ao buscar os preços das skins.' });
        }
    } catch (error) {
        console.error('Erro na requisição da API:', error);
        res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`);
});
