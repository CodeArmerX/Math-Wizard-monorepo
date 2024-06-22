const url = 'https://codearmer-math-wizard-64.deno.dev/api/auth/'
async function signIn ({ username, password }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }
  const response = await fetch(url, options)

  return response
}
export async function register ({ email, password, username }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, username })
  }
  const response = await fetch(url, options)

  return response
}
