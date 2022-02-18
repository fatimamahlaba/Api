const express = require('express');
const cors = require('cors')
const portfolioApi = require('./Routes/portfolioApi');
const contactApi = require('./Routes/contactApi');
const testimonialsApi = require('./Routes/testimonialsApi');

const app = express()
const path = require('path');

app.use(express.json())
app.use(cors())

app.set('port', process.env.PORT ||37244 )

app.get('/', (req, res, next) =>{
    res.send({msg: "Fatima Mahlaba Portfolio API"});
})
app.use('/portfolio', portfolioApi);
app.use('/contact', contactApi);
app.use('/testimonials', testimonialsApi);

app.listen(app.get('port'), server => {
    console.info(`Server listen on port ${app.get('port')}`);
})
