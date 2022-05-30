const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const Product = require('./routes/product')
const Student = require('./routes/student')
const EmailModel = require('./models').Email
const UserModel = require('./models').User



//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//

app.get("/users", (req, res) => {
    EmailModel.findAll({
        // include: {
        //     model: EmailModel,
        // }
    }).then((data) => {
        return res.json({
            status: 1,
            data: data
        })
    })
})

app.use('/api/v1/products', Product)
app.use('/api/v1/auth', Student)




app.listen(port, () => console.log(`App listen ${port}`));
