//Q1. Show rating

function showRating(rating) {
    let ratings = ""
    for (let i = 0; i < 4; ++i) {
        ratings += "*"
        if (i!== Math.floor(rating) - 1) {
            ratings += " "
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " ."
    }
    return ratings
}
console.log(showRating(4.5))

//      1. Initialize an empty string
//      2. loop through the rounded down rating
//      3. Add a star for every iteration
//      4. If its not the last iteration, add a space
//      5. Check if the number is not an integer
//      6. If not, add a full stop
//      7. Return it



// Q2. Sort by lowest to highest price

function sortLowToHigh(prices) {
    return prices.sort((a, b) => a - b)     //You can change the order of => a - b to change the order that the numbers are sorted
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 100]))



// Q3. Sort by highest to lowest price

function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - a.price)
}
console.log(sortHighToLow([{id: 1, price: 50}, {id: 2, price: 30}, {id: 3, price: 60}, {id: 4, price: 10}]))



// Q4. Promises

        /* Helpful Videos */
    
//  1. "The Async Await Epsiode I promised"   - Fireship
//  2. "Async Await JavaScript ES7"           - Techsith
//  3. "Async JS Crash Course - Callbacks, Promises, Async Await"
//                                            - Traversy Media



// Q5. Find all the posts by a single user

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await promise.json()
    const posts = result.filter(element => element.userId === userId)
    console.log(posts)
}   
postsByUser(6)



// Q6. Find the First 6 Incomplete Todos

async function firstSixIncomplete(toDos) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()
    const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6)
    console.log(incompleteTasks)
}
firstSixIncomplete(6)