import { Resend } from 'npm:resend'

const resend = new Resend('re_dbWqsoWE_3F6nirWQdMbSAubsPwZKHyiS')

function generateRecoveryCode() {
  const random = Math.random() * 1000000
  const code = Math.floor(random)
  return code
}
export async function sendRecoveryEmail(email: string) {
  if (!email) return
  const code = generateRecoveryCode()
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'geanmotas@gmail.com',
    subject: 'Code to reset your password',
    html:
      `<p>This is your code to reset your password <strong>${code}</strong>!</p>`,
  })
  return code
}
