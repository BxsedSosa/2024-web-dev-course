import express from "express";

const app = express();
const port = 3000;


const date = new Date();
const today = date.getDay();

const messages = {
    weekday: {
        dayType: 'a weekday',
        advice: "it's time to get to work",
    },
    weekend: {
        dayType: 'a weekend',
        advice: "Go have some fun",
    },
}


app.get('/', (req, res) => {
    if (today > 0 && today < 6) {
        res.render('index.ejs', messages.weekday)
    } else {
        res.render('index.ejs', messages.weekend)
    }
});

app.listen(port, () => {
    console.log(`You are connect to port ${port}`)
})