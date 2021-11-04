'use strict';

const { response } = require('express');
const express = require('express')

const app = express()

app.get('/users/:username/info/:infoitem' , (request,response) => {
    console.log( 'Method:', request.method);
    console.log('Path:', request.path)
    console.log('Query:' , request.query)
    response.write(`Method: ${request.method}\n`)
    response.write(`Path: ${request.path}\n`)
    response.write(`Query: ${request.query\n`)
    (${JSON.stringify(request.query)}\n)
    response.send()
})

app.listen(8888)
