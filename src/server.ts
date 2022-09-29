import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Integrado Backend'})
})

app.listen(3333, () => console.log('App running on Port:3333'))