import { SmtpClient } from '@xtool/smtp'

const client = new SmtpClient()

await client.connect({
  hostname: 'smtp.gmail.com',
  port: 465,
  username: 'noreply.nibiru@gmail.com',
  password: 'o h i o t w m j m h f gg d s f',
  tls: true,
})

await client.send({
  from: 'username@163.com',
  to: 'shoujianren@qq.com',
  subject: `Email Test`,
  content: 'Mail Content',
  html: 'hello world',
})
function generateRecoveryCode() {
  const random = Math.random() * 1000000
  const code = Math.floor(random)
  return code
}

export async function sendRecoveryEmail(email: string) {
  if (!email) return
  const code = generateRecoveryCode()
  await client.send({
    from: 'noreply.nibiru@gmail.com',
    to: email,
    subject: 'Probando email',
    content: `El código es: ${code}`,
    html: `<p>El código es: ${code}</p>`,
  })
  return code
}
