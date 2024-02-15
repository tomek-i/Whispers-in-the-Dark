import { render, screen } from "@testing-library/react"
import { Avatar } from "./Avatar"

test("renders", () => {
  render(<Avatar src={""} alt={""} />)
  expect(screen.getByText("Avatar")).toBeInTheDocument()
})
