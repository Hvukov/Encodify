const encoder = require("./encoderFunction")

describe("encoder", () => {
  it("should encode 'aabbbcc' to 'a2b3c2'", () => {
    expect(encoder("aabbbcc")).toBe("a2b3c2")
  })

  it("should encode 'abcd' to 'a1b1c1d1'", () => {
    expect(encoder("abcd")).toBe("a1b1c1d1")
  })
})
