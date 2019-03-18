const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const pgp = require('pg-promise')()
const db = pgp('postgres://nwcvragt:tlVmxF2fRKcAcDIzqB6TTSGCHnWFT8Cf@isilo.db.elephantsql.com:5432/nwcvragt')
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/notes', (req, res, next) => {
        db.any('SELECT * from note')
        .then(function (data) {
          res.json(data);
        })
        .catch(function (error) {
          res.send(error);
        })
    })

    server.get('/p/:id', (req, res) => {
        const actualPage = '/post'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })