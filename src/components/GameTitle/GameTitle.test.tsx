import { render, screen } from "@testing-library/react"
import { GameTitle } from "./GameTitle"

test("renders", () => {
  render(<GameTitle />)
  expect(screen.getByText("GameTitle")).toBeInTheDocument()
})
