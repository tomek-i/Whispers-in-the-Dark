//TODO: remove export so that the calls are going though http.post
export async function post<T>(url: string, data: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    console.error("failed to POST data")
  }

  return (await res.json()) as T
}

export async function get<T>(url: string) {
  const res = await fetch(url, { method: "GET" })

  if (!res.ok) {
    console.error("failed to GET data")
  }
  return (await res.json()) as T
}

export const http = {
  post,
  get,
}
