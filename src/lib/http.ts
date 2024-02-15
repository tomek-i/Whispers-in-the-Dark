//TODO: remove export so that the calls are going though http.post
export async function post<T>(url: string, data: unknown) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    console.error("failed to POST data")
    return { ok: false, data: null }
  }

  return (await res.json()) as { ok: boolean; data: T }
}

export async function get<T>(url: string) {
  const res = await fetch(url, { method: "GET" })

  if (!res.ok) {
    console.error("failed to GET data")
    return { ok: false, data: null }
  }
  return (await res.json()) as { ok: boolean; data: T }
}

export const http = {
  post,
  get,
}
