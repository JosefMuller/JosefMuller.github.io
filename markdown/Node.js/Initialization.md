``` js
const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');
const http = {
    server: require('http').createServer(app),
    port: 80
}
const https = {
    server: require('https').createServer({
        key: fs.readFileSync(path.join(__dirname, './certificate/private.pem'), 'utf8'),
        cert: fs.readFileSync(path.join(__dirname, './certificate/file.crt'), 'utf8')
    }, app),
    port: 4443
}

const root = "Markdown";
const classification = fs.readdirSync(root);
const folders = classification.filter(folder => fs.statSync(`${root}/${folder}`).isDirectory());

const log = {};
folders.forEach(folder => {
    log[folder] = {
        http: `http://localhost${http.port == 80 ? "" : ":" + http.port}/${folder}`,
        https: `https://localhost${https.port == 443 ? "" : ":" + https.port}/${folder}`,
        "": " ---> ",
        "Mapping": path.resolve(`${root}\\${folder}\\^`).replace(/\\/g, "/")
    }
    app.use(`/${folder}`, express.static(`${root}\\${folder}\\^`));
})
console.table(log);

app.use('/', function(req, res) {
    const callback = Object.create(null);
    Object.keys(log).forEach(key => callback[key] = log[key][req.protocol]);
    res.status(200).send(`<pre>${JSON.stringify(callback, null, 2)}</pre>`);
});

[http, https].forEach(net => net.server.listen(net.port));
```
