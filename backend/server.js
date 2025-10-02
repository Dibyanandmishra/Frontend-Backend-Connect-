// require ke jgh import use krne ke liye --> package.json me ["type": "module",] add krna pdega
import express from "express";

const app = express();

// server banaya
app.get("/", (req,res) =>{
    res.send("Sever is ready");
});

// get a list of 5 jokes -- creating a route
app.get("/api/jokes", (req,res) =>{
    const jokes = [
        {
            id: 0,
            title: "first",
            content: "first jokes",
        },
        {
            id: 1,
            title: "second",
            content: "second jokes",
        },
        {
            id: 2,
            title: "third",
            content: "third jokes",
        },
        {
            id: 3,
            title: "fourth",
            content: "fourth jokes",
        },
        {
            id: 4,
            title: "fifth",
            content: "fifth jokes",
        }];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});


//  ADDITIONAL INFO:
// jsonformatter website --> to read the api's clearly