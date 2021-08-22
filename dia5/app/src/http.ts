type Options = {
  method: string,
  headers: {
    'content-type': string,
  },
  body: string
}

const request = (url: string, options: Options | undefined) =>
  fetch(url, options)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

const createRequest = (method: string) => (url: string, data: Object) => request(url, {
  method,
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
})

export const get = (url: string) => request(url)
export const post = createRequest('POST')
export const del = createRequest('DELETE')