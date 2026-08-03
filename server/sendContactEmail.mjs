import nodemailer from 'nodemailer'

const BRAND = {
  navy950: '#061a12',
  navy900: '#0b2e1f',
  navy800: '#123d2a',
  green: '#1f7a52',
  coral: '#f0947d',
  coralSoft: '#fcede8',
  cream: '#fffaf5',
  creamWarm: '#faf3eb',
  muted: '#6b7280',
  white: '#ffffff',
}

function getMailConfig() {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD
  const to = process.env.CONTACT_TO_EMAIL || user

  if (!user || !pass || !to) {
    const error = new Error(
      'Email is not configured. Set GMAIL_USER, GMAIL_APP_PASSWORD, and CONTACT_TO_EMAIL in .env',
    )
    error.statusCode = 500
    throw error
  }

  return { user, pass, to }
}

function createTransporter(user, pass) {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  })
}

/**
 * @param {{ name: string, email: string, subject: string, message: string }} payload
 */
export async function sendContactEmail(payload) {
  const { name, email, subject, message } = payload
  const { user, pass, to } = getMailConfig()

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    const error = new Error('Name, email, subject, and message are required.')
    error.statusCode = 400
    throw error
  }

  const transporter = createTransporter(user, pass)
  const safeName = name.trim()
  const safeEmail = email.trim()
  const safeSubject = subject.trim()
  const safeMessage = message.trim()
  const receivedAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const text = [
    'New contact form submission from the Rwoga website',
    '',
    `Received: ${receivedAt}`,
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    `Subject: ${safeSubject}`,
    '',
    'Message:',
    safeMessage,
    '',
    'We read every note and respond with care.',
  ].join('\n')

  const html = buildBrandedEmailHtml({
    eyebrow: 'Rwoga Family Association',
    title: 'New website message',
    receivedAt,
    fields: [
      { label: 'Name', value: safeName },
      { label: 'Email', value: safeEmail, href: `mailto:${safeEmail}` },
      { label: 'Subject', value: safeSubject, accent: true },
    ],
    messageLabel: 'Message',
    message: safeMessage,
    ctaLabel: `Reply to ${safeName}`,
    ctaHref: `mailto:${encodeURIComponent(safeEmail)}?subject=${encodeURIComponent(`Re: ${safeSubject}`)}`,
    footerNote: 'We read every note and respond with care.',
  })

  await transporter.sendMail({
    from: `"Rwoga Website" <${user}>`,
    to,
    replyTo: safeEmail,
    subject: `[Rwoga Contact] ${safeSubject} — ${safeName}`,
    text,
    html,
  })
}

/**
 * @param {{ name: string, email: string, type: string, message?: string }} payload
 */
export async function sendDonateEmail(payload) {
  const { name, email, type, message } = payload
  const { user, pass, to } = getMailConfig()

  if (!name?.trim() || !email?.trim() || !type?.trim()) {
    const error = new Error('Name, email, and contribution type are required.')
    error.statusCode = 400
    throw error
  }

  const transporter = createTransporter(user, pass)
  const safeName = name.trim()
  const safeEmail = email.trim()
  const safeType = type.trim()
  const safeMessage = (message || '').trim() || 'No additional message provided.'
  const receivedAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const text = [
    'New donation interest from the Rwoga website',
    '',
    `Received: ${receivedAt}`,
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    `Contribution type: ${safeType}`,
    '',
    'Message:',
    safeMessage,
    '',
    'Please follow up with gratitude and next steps.',
  ].join('\n')

  const html = buildBrandedEmailHtml({
    eyebrow: 'Rwoga Family Association',
    title: 'New donation interest',
    receivedAt,
    fields: [
      { label: 'Name', value: safeName },
      { label: 'Email', value: safeEmail, href: `mailto:${safeEmail}` },
      { label: 'Contribution type', value: safeType, accent: true },
    ],
    messageLabel: 'Message',
    message: safeMessage,
    ctaLabel: `Thank ${safeName}`,
    ctaHref: `mailto:${encodeURIComponent(safeEmail)}?subject=${encodeURIComponent('Thank you for your interest in supporting Rwoga')}`,
    footerNote: 'A generous heart reached out — follow up with care.',
  })

  await transporter.sendMail({
    from: `"Rwoga Website" <${user}>`,
    to,
    replyTo: safeEmail,
    subject: `[Rwoga Donate] ${safeType} — ${safeName}`,
    text,
    html,
  })
}

/**
 * @param {{
 *   eyebrow: string,
 *   title: string,
 *   receivedAt: string,
 *   fields: Array<{ label: string, value: string, href?: string, accent?: boolean }>,
 *   messageLabel: string,
 *   message: string,
 *   ctaLabel: string,
 *   ctaHref: string,
 *   footerNote: string,
 * }} data
 */
function buildBrandedEmailHtml(data) {
  const fieldsHtml = data.fields
    .map((field) => {
      const valueHtml = field.href
        ? `<a href="${escapeHtml(field.href)}" style="color:${BRAND.green};text-decoration:none;">${escapeHtml(field.value)}</a>`
        : escapeHtml(field.value)
      const bg = field.accent ? BRAND.coralSoft : BRAND.creamWarm
      const border = field.accent ? '#f5cfc3' : '#efe4d7'
      const labelColor = field.accent ? BRAND.navy900 : BRAND.muted

      return `
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:12px;">
                <tr>
                  <td bgcolor="${bg}" style="background-color:${bg};border-radius:14px;padding:16px 18px;border:1px solid ${border};">
                    <p style="margin:0 0 5px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${labelColor};">${escapeHtml(field.label)}</p>
                    <p style="margin:0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;color:${BRAND.navy900};">${valueHtml}</p>
                  </td>
                </tr>
              </table>`
    })
    .join('')

  const message = escapeHtml(data.message).replace(/\n/g, '<br />')

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(data.title)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.creamWarm};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${BRAND.creamWarm};">
    <tr>
      <td align="center" style="padding:36px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:100%;max-width:600px;background-color:${BRAND.cream};border-collapse:separate;border-radius:24px;overflow:hidden;border:1px solid #e8ddd0;">
          <tr>
            <td bgcolor="${BRAND.navy900}" style="background-color:${BRAND.navy900};padding:32px 36px 28px;">
              <p style="margin:0 0 10px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${BRAND.coral};">
                ${escapeHtml(data.eyebrow)}
              </p>
              <h1 style="margin:0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:28px;line-height:1.2;font-weight:700;color:${BRAND.white};">
                ${escapeHtml(data.title)}
              </h1>
              <p style="margin:12px 0 0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:14px;color:#b8d4c4;">
                ${escapeHtml(data.receivedAt)}
              </p>
            </td>
          </tr>
          <tr>
            <td bgcolor="${BRAND.coral}" style="background-color:${BRAND.coral};height:5px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:30px 36px 8px;background-color:${BRAND.cream};">
              <p style="margin:0 0 18px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:${BRAND.green};">
                Details
              </p>
              ${fieldsHtml}
              <p style="margin:12px 0 12px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:${BRAND.green};">
                ${escapeHtml(data.messageLabel)}
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:28px;">
                <tr>
                  <td bgcolor="${BRAND.white}" style="background-color:${BRAND.white};border-radius:16px;padding:22px 22px;border:1px solid #ebe0d2;">
                    <p style="margin:0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.75;color:${BRAND.navy800};">
                      ${message}
                    </p>
                  </td>
                </tr>
              </table>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:8px;">
                <tr>
                  <td align="center" style="padding-bottom:8px;">
                    <a href="${escapeHtml(data.ctaHref)}" style="display:inline-block;background-color:${BRAND.navy900};color:${BRAND.white};font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 30px;border-radius:12px;">
                      ${escapeHtml(data.ctaLabel)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="${BRAND.navy900}" style="background-color:${BRAND.navy900};padding:22px 36px;text-align:center;">
              <p style="margin:0 0 6px;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;color:${BRAND.coral};">
                ${escapeHtml(data.footerNote)}
              </p>
              <p style="margin:0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:12px;color:#8fb89f;">
                Sent from the Rwoga Family Association website
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
