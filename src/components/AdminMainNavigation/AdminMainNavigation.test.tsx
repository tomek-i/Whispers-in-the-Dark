import { render, screen } from "@testing-library/react"
import { AdminMainNavigation } from "src/components/AdminMainNavigation"

test("renders", () => {
  render(<AdminMainNavigation />)
  expect(screen.getByText("AdminMainNavigation")).toBeInTheDocument()
})
