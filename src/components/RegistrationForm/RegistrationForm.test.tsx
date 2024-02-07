import { RegistrationForm } from "components/RegistrationForm"
import { render, screen } from "@testing-library/react"

test("renders", () => {
    render(<RegistrationForm />)
    expect(screen.getByText("RegistrationForm")).toBeInTheDocument()
})