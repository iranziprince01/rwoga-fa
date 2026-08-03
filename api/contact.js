import { sendContactEmail } from '../server/sendContactEmail.mjs'

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

export default async function handler(req, res) {
  setCors(res)

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
    await sendContactEmail(body)
    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('[contact]', error)
    const statusCode = error.statusCode || 500
    res.status(statusCode).json({
      error: error.message || 'Failed to send message. Please try again later.',
    })
  }
}
