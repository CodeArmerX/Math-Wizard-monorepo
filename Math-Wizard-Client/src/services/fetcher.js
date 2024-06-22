export async function fetcher ({
  url,
  method = 'GET',
  body = null,
  headers = { 'Content-Type': 'application/json' },
  token = null
}) {
  const response = await fetch(url, {
    method,
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    },
    body: body && JSON.stringify(body)
  })
  return response.json()
}
