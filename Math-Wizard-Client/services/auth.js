const url = 'https://codearmer-math-wizard-64.deno.dev/api/auth/'
export async function login ({ username, password }) {
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
export async function loginWithEmail ({ email, verificationCode }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, verificationCode })
  }
  const response = await fetch(url, options)
  return response
}

export async function sendRecoveryEmail ({ email }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  }
  const response = await fetch(url + 'recovery', options)
  return response
}

export async function updatePassword ({ token, password }) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token, password })
  }
  const response = await fetch(url + 'recovery', options)
  return response
}
