import { parse } from 'querystring'

export interface Rating {
  stars: number
  email: string
}

/**
 * Parses and validates the given HTTP `body` to create  a `Rating`.
 * Returns `null` if a `Rating` cannot be created.
 */
export function createRating(body: string): Rating | null {
  let form = parse(body)
  let stars = validateStars(form.stars)
  if (!stars) return null
  let email = validateEmail(form.email)
  if (!email) return null
  return { stars, email }
}

type FormValue = undefined | string | string[]

/**
 * Checks whether the given form value is a valid star-rating, e.g. `1-5`.
 * Returns `null` if the value is not a star-rating.
 */
export function validateStars(value: FormValue): number | null {
  if (!value) return null
  if (Array.isArray(value)) return null
  let stars = parseInt(value)
  switch (stars) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return stars
    default:
      return null
  }
}

/**
 * Checks whether the given form value is a valid email address.
 * Returns `null` if the value is not an email address.
 */
export function validateEmail(value: FormValue): string | null {
  if (!value) return null
  if (Array.isArray(value)) return null
  if (!/.+@.+/.test(value)) return null
  return value
}
