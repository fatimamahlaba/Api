const express = require('express');
const cors = require('cors')
const projectApi = require('./Routes/projectApi');
const contactApi = require('./Routes/contactApi');
const testimonialsApi = require('./Routes/testimonialsApi');

const app = express()
const path = require('path');

app.use(express.json())
app.use(cors())

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res, next) =>{
    res.send({msg: "Fatima Mahlaba Portfolio API"});
})
app.use('/projects', projectApi);
app.use('/contact', contactApi);
app.use('/testimonials', testimonialsApi);

app.listen(app.get('port'), server => {
    console.info(`Server listen on port ${app.get('port')}`);
})
