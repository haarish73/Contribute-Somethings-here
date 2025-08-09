import express from 'express';
import sum from './sum.mjs'

const app = express();

const port = 9000;

app.get("/home", (req,res) => {
    res.json({
        message : "Welcome to the home page!"
    })
})

app.get("/getSum/:a/:b", async (req, res) => {
    const {a,b} = req.params;

    res.json({
        sum: sum(parseInt(a), parseInt(b)) 
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
