import { renderHook } from "@testing-library/react"
import { auth } from "hooks"

test("renders hook", () => {
    const {result} = renderHook(() => auth())
    expect(result.current).toBeUndefined()
})