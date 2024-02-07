import { Overlay } from "components/Overlay"
import { render, screen } from "@testing-library/react"

test("renders", () => {
    render(<Overlay />)
    expect(screen.getByText("Overlay")).toBeInTheDocument()
})