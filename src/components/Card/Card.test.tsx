import { render, screen } from "@testing-library/react"
import { Card } from "./Card"

test("renders", () => {
  render(<Card />)
  expect(screen.getByText("Card")).toBeInTheDocument()
})
