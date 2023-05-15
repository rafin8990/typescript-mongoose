const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 5000


bootstrap().catch(err => console.log(err));

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log(`Database Connection successful`);
    }
    catch (error) { ` Failed to connect database ` }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`server is listening listening on port ${port}`)
});

bootstrap()