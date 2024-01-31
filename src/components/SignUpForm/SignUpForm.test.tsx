import { render, screen } from "@testing-library/react"
import { SignUpForm } from "components/SignUpForm"

test("renders", () => {
  render(<SignUpForm />)
  expect(screen.getByText("SignUpForm")).toBeInTheDocument()
})
