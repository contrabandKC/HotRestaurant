var tableData = require("../data/tableData.js")
var waitListData = require("../data/waitinglistData.js")
var sendSMS = require("./Twilio.js")


module.exports = function(app){


    //Spits out json
    app.get("/api/tables", function(req, res){
        res.json(tableData)
    });


    app.get("/api/waitList", function(req, res){
        res.json(waitListData)
    });


    //api

    app.post("/api/tables", function(req, res){

        const message = req.body.customerName + " Your table will be ready soon!"

        if(tableData.length <5){
            tableData.push(req.body);
            console.log(req.body.phoneNumber)
            sendSMS(req.body.phoneNumber, message)
            res.json(true)
        }
        else{
            waitListData.push(req.body)
            sendSMS(req.body.phoneNumber, message)
            res.json(false)
        }

    } )


    app.post("/api/sms", function(req, res){

        const message = req.body.customerName +" Your table is ready"

        console.log(message)

        sendSMS(req.body.phoneNumber, message)

        res.json(true)
    })



}