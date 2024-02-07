import { GameTitle } from "components/GameTitle"
import { render, screen } from "@testing-library/react"

test("renders", () => {
    render(<GameTitle />)
    expect(screen.getByText("GameTitle")).toBeInTheDocument()
})