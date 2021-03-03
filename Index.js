const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

app.listen(port, () =>
{
    console.log('Server is running on port 3000');
})

app.get('/company', (req, res) =>
{
res.status(200).send(
    
    {
       "Name:": "Alex Carry",
       "Age": "24",
       "Company":"SHL",
       "Salary":"$450K"
    }

)
});

app.post('/company/:id', (req, res) =>
{

    const {id} = req.params;
    const {Company} = req.body;

    if(!Company)
    {
        res.status(418).send({message: 'Please provide an company'});
    
    }
    res.send(
        {
            "Message": "Got your Request",
            "Salary":"I will Increase it more! Thanks"
        });
    
});

