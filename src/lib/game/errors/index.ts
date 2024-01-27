export class InvalidCharacterError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "InvalidCharacterError"
  }
}
export class AbilityUsageError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "AbilityUsageError"
  }
}
