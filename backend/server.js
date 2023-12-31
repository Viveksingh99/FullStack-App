const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/emp', (req, res) => {
    const emp = [
        {
            id:1,
            name:'vivek',
            title:'singh'
        }, {
            id:2,
            name:'vivek',
            title:'singh'
        }, {
            id:3,
            name:'vivek',
            title:'singh'
        }, {
            id:4,
            name:'vivek',
            title:'singh'
        }, {
            id:5,
            name:'vivek',
            title:'singh'
        }, {
            id:6,
            name:'vivek',
            title:'singh'
        }, {
            id:7,
            name:'vivek',
            title:'singh'
        }, {
            id:8,
            name:'vivek',
            title:'singh'
        }
    ]
    res.send(emp)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server at http://localhost:{port}`)
})