//STEP 1
const favoriteMovies = ["Inception", "Avatar", "Interstellar", "Gladiator", "Titanic"];
console.log("Task 1 - Second favorite movie:", favoriteMovies[1]);

//STEP 2
const movies = new Array(5);
movies[0] = "PulpFiction";
movies[1] = "Matrix";
movies[2] = "FightClub";
movies[3] = "Braveheart";
movies[4] = "Jaws";
console.log("Task 2 - First movie:", movies[0]);

//STEP 3
movies.splice(2,0,"JurassicPark")   ;
console.log("Task 3 - Array length:", movies.length);

//STEP 4
const moviesLiteral = ["Scarface", "Tenet", "Memento", "Psycho", "Oppenheimer"];
delete moviesLiteral[0];
console.log("Task 4 - Contents after deleting the first movie:", moviesLiteral);

//STEP 5
const movies7 = ["Se7en", "Zodiac", "Inception", "Shining", "Batman", "KarateKid", "Titanic"];
console.log("Task 5 - Displaying movies with a for loop:");
for (let i = 0; i < movies7.length; i++) {
  console.log(movies7[i]);
}

//STEP 6
console.log("Task 6 - Displaying movies with a for-in loop:");
for (const index in movies7) {
  console.log(movies7[index]);
}

//STEP 7
movies7.sort();
console.log("Task 7 - Displaying movies sorted:");
for (const index in movies7) {
  console.log(movies7[index]);
}

//STEP 8
const leastFavMovies = ["Godzilla", "Transformers", "Twilight"];
console.log("Task 8 - Movies I like:\n");
for (let i = 0; i < movies7.length; i++) {
  console.log(movies7[i]);
}
console.log("\nMovies I regret watching:\n");
for (let i = 0; i < leastFavMovies.length; i++) {
  console.log(leastFavMovies[i]);
}

//STEP 9
const mergedMovies = movies7.concat(leastFavMovies);
mergedMovies.sort().reverse();
console.log("Task 9 - Merged and reverse sorted movies:", mergedMovies);

//STEP 10
const lastItem = mergedMovies[mergedMovies.length - 1];
console.log("Task 10 - Last item in the merged array:", lastItem);
