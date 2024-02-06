import { Avatar } from "components/Avatar"
import { render, screen } from "@testing-library/react"

test("renders", () => {
    render(<Avatar />)
    expect(screen.getByText("Avatar")).toBeInTheDocument()
})