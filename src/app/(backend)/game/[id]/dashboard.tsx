export default function GameDashboardPage({ params }: { params: { id: string } }) {
  //TODO: this page needs to ensure that the current user is the game master of this game otherwise its forbidden
  //TODO: this page should show game information like player count, allocation of characters, etc
  //TODO: this page should allow the game-master to start the game
  //TODO: this page should allow the game-master to shuffle the characters
  //TODO: this page should allow the game-master to manually pick the characters
  //TODO: this page should allow the game-master to randomly/manually assign the characters
  //TODO: this page should allow the game-master to send private messages to players
  return (
    <>
      <p>Game Dashboard for GAME: {params.id}</p>
    </>
  )
}
