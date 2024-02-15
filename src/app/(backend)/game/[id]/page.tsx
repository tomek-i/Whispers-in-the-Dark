export default function GamePage({ params }: { params: { id: string } }) {
  return (
    <>
      <p>Game Page for GAME: {params.id}</p>
    </>
  )
}
