import { render, screen } from "@testing-library/react"
import { LoginForm } from "./LoginForm"

test("renders", () => {
  render(<LoginForm />)
  expect(screen.getByText("LoginForm")).toBeInTheDocument()
})
