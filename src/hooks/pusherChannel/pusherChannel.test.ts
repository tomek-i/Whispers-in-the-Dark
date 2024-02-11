import { renderHook } from "@testing-library/react"
import { pusherChannel } from "hooks"

test("renders hook", () => {
    const {result} = renderHook(() => pusherChannel())
    expect(result.current).toBeUndefined()
})