import { deepStrictEqual } from 'assert'
import { validateStars, validateEmail } from './rating'

/**
 * Test `validateStars` function.
 */
test(validateStars(undefined), null)
test(validateStars([]), null)
test(validateStars('a'), null)
test(validateStars('9'), null)
test(validateStars('5'), 5)

/**
 * Test `validateEmail` function.
 */
test(validateEmail(undefined), null)
test(validateEmail([]), null)
test(validateEmail('@'), null)
test(validateEmail('a@b'), 'a@b')

/**
 * Tests whether the value `actual` is equal to the value `expected`.
 * Prints a green `✔` if the test succeeded, else a red `✖`.
 */
function test(actual: unknown, expected: unknown): void {
  let green = '\x1B[32m'
  let red = '\x1B[31m'
  let reset = '\x1B[0m'
  try {
    deepStrictEqual(actual, expected)
    console.log(green + '✔' + reset, actual, '=', expected)
  } catch {
    console.error(red + '✖' + reset, actual, '≠', expected)
    process.exitCode = 1
  }
}
