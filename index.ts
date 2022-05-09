
import app from './src/server'

const port = process.env.PORT

app.listen(port, () => {
  console.log(`🚀 App listening at http://localhost:${port}`)
})