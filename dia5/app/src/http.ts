const request = (url: string, options?: RequestInit | undefined) =>
  fetch(url, options)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

type Methods = 'POST' | 'DELETE'

const createRequest = (method: Methods) => <Data>(url: string, data: Data) => request(url, {
  method,
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
})

export const get = (url: string) => request(url)
export const post = createRequest('POST')
export const del = createRequest('DELETE')
