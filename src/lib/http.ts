export async function post<T>(url: string, data: T) {
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

  return res
}
