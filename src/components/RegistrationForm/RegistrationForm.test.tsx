import { render, screen } from "@testing-library/react"
import { RegistrationForm } from "./RegistrationForm"

test("renders", () => {
  render(<RegistrationForm />)
  expect(screen.getByText("RegistrationForm")).toBeInTheDocument()
})
