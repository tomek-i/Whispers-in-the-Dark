import { render, screen } from "@testing-library/react"
import { MainNavigaion } from "./MainNavigaion"

test("renders", () => {
  render(<MainNavigaion />)
  expect(screen.getByText("MainNavigaion")).toBeInTheDocument()
})
