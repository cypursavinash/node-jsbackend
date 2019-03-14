var express = require("express");
var app = express();
var PORT = 6001;

var dataSet = []


dataSet.push({ name: "Priyanshu", city: "New York" });
dataSet.push({ name: "Avinash", city: "Los Angeles" });

app.use(express.json());

app.get('/user', function (req, res) {
    console.log("You requested for a user");
    res.json(dataSet)
    res.send(dataSet);
    // res.sendStatus(200);
})
app.get('/count', function (req, res) {
    let count = dataSet.length
    console.log(count);
    res.send(count + "");
    // res.end(count)
}
)
app.get('/user/:id', function (req, res) {
    let tempData = dataSet[parseInt(req.params.id)];
    console.log("dataset ", tempData);
    try {
        if (tempData != undefined && tempData != null) {
            res.json(tempData)
        } else {
            res.sendStatus(404);
            // res.send("No Data Available");

        }
    }
    catch (err) {
        res.send(err);
        res.sendStatus(500);
    }
})

// app.post("/user", function (req, res) {
//     console.log("You inserted a user")
//     console.log(req.body);
// })

app.listen(PORT, function () {
    console.log("Server running port  " + PORT)
})
// app.post('/user', function (req, res) {
//     let data = req.body

//     if (data != undefined && data != null) {
//         dataSet.push(data)
//         console.log(dataSet);
//         res.json(dataSet)
//     }
//     else {
//         res.sendStatus(500)
//     }

// });

app.post('/user', function (req, res) {
    let data = req.body
    console.log(data);
   
    if(array.isArray()){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log("array is ");
    }
    }
    
});
function isValidData(data) {


    if (typeof data == 'object') {
        
        if(Array.isArray(data)){
            return 'array';
        }
        else{
            return 'object';
        }
        
    }
    else {
        return 'invalid';
        console.log("data os not string")
    }
}