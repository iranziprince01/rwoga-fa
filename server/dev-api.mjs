import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { sendContactEmail, sendDonateEmail } from './sendContactEmail.mjs'

const app = express()
const port = Number(process.env.CONTACT_API_PORT || 8787)

app.use(cors())
app.use(express.json({ limit: '32kb' }))

app.post('/api/contact', async (req, res) => {
  try {
    await sendContactEmail(req.body || {})
    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('[contact]', error)
    const statusCode = error.statusCode || 500
    res.status(statusCode).json({
      error: error.message || 'Failed to send message. Please try again later.',
    })
  }
})

app.post('/api/donate', async (req, res) => {
  try {
    await sendDonateEmail(req.body || {})
    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('[donate]', error)
    const statusCode = error.statusCode || 500
    res.status(statusCode).json({
      error: error.message || 'Failed to send your interest. Please try again later.',
    })
  }
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`)
})
