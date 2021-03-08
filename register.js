const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

app.listen(port, () =>
{
    console.log('Server is running on port 3000');
})
app.post('/company/register', (req, res) =>
{
    const {register} = req.params;
    const {name} = req.body;
    const {email} = req.body;

    if (!name || !email)
    {
        res.status(404).send({message:'Please provide me an email and password'});
    
    }
    res.send(
        {
            "Message": "Registration has been sucessfully done",
            "onBoard": true
        }
    )

});
