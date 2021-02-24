
const express = require("express");
const cors = require('cors')
const faker = require('faker');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>console.log(`server started on ${PORT}`));

let arr=[]
for(let i=0;i<10;i++){
    arr.push({
        id:i+1,
        name:faker.name.findName(),
        email:faker.internet.email(),
        country:faker.address.country(),
        phoneNo:faker.phone.phoneNumber()
    });
}
console.log(arr)

app.get('/users',(req,res)=>{
    res.json(arr)
})
