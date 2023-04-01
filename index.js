import express from 'express'
 
const app = express()
 
app.get('/', (req, res) => {
   res.send('hello from server!')
})
 
app.get('/api/helloworld', (req, res) => {
    res.json({sayHi: "Hello From Server, Nice To Meet You Guys!"})
})

app.listen(5000, () => {
   console.log('App listening on port 5000')
})