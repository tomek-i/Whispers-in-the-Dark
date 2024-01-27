// import { useRouter } from "next/router"
"use client"

import { useEffect } from "react"

export default function GamePage({ params }: { params: { id: string } }) {
  // const router = useRouter()

  useEffect(() => {
    const response = async () => await fetch(`/api/admin/game/${params.id.toLowerCase()}`, { method: "GET" })
    response()
  }, [])
  return (
    <div>
      <p>Game ID: {params.id}</p>
      {/* <p>Game: {JSON.stringify(game)}</p> */}
    </div>
  )
}
