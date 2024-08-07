import e from 'express'
import ViteExpress from 'vite-express'

const app = e()

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!')
})

ViteExpress.listen(app, 8080, () =>
  console.log('Server is listening on port 8080...')
)
