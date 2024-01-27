import { AdminMainNavigation } from "components/AdminMainNavigation"
import { render, screen } from "@testing-library/react"

test("renders", () => {
    render(<AdminMainNavigation />)
    expect(screen.getByText("AdminMainNavigation"))
})