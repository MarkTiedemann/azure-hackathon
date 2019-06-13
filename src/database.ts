import { Rating } from './rating'

let ratings: Rating[]

/**
 * Initializes the connection to the database.
 */
export async function connectDatabase(): Promise<void> {
  ratings = [
    /* Bogus ratings to pre-fill admin dashboard. */
    /*
    { email: '0@example.org', stars: 5 },
    { email: '1@example.org', stars: 5 },
    { email: '2@example.org', stars: 5 },
    { email: '3@example.org', stars: 5 },
    { email: '4@example.org', stars: 5 },
    { email: '5@example.org', stars: 5 },
    { email: '6@example.org', stars: 5 },
    { email: '7@example.org', stars: 5 },
    { email: '8@example.org', stars: 5 },
    { email: '9@example.org', stars: 5 },
    { email: '10@example.org', stars: 5 },
    { email: '11@example.org', stars: 4 },
    { email: '12@example.org', stars: 4 },
    { email: '13@example.org', stars: 4 },
    { email: '14@example.org', stars: 4 },
    { email: '15@example.org', stars: 4 },
    { email: '16@example.org', stars: 4 },
    { email: '17@example.org', stars: 4 },
    { email: '18@example.org', stars: 3 },
    { email: '19@example.org', stars: 3 },
    { email: '20@example.org', stars: 3 },
    { email: '21@example.org', stars: 2 },
    { email: '22@example.org', stars: 2 },
    { email: '23@example.org', stars: 1 },
    { email: '24@example.org', stars: 1 },
    { email: '25@example.org', stars: 1 },
    { email: '26@example.org', stars: 1 }
    */
  ]
}

/**
 * Stores the given `Rating` in the database.
 */
export async function storeRating(rating: Rating): Promise<void> {
  ratings.push(rating)
}

/**
 * Loads all ratings from the the database.
 */
export async function loadRatings(): Promise<Rating[]> {
  return ratings
}
