const http = require('http');
const { parse } = require('querystring');
const util = require('util')

var express = require('express')

var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/', function (req, res, next) {
    if (req.method === 'POST') {

        console.log("========*======== req.body=" + req.body);
        console.log(util.inspect(req.body, false, null, true /* enable colors */))
        console.log("========*======== req.params=" + req.params);
        console.log(util.inspect(req.params, false, null, true /* enable colors */))

        
        res.send("ok");
    } 
    else {
        res.end(`
            <!doctype html>
            <html>
            <body>
                <form action="/" method="post">
                    <input type="text" name="fname" /><br />
                    <input type="number" name="age" /><br />
                    <input type="file" name="photo" /><br />
                    <button>Save</button>
                </form>
            </body>
            </html>
        `);
    }
});


app.listen(process.env.PORT || 5000);


