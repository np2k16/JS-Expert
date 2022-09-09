//Q1 - Given a rating, display a star(*) for each full rating
//and a period(.) for each half rating
function showRating(num){
    let rating = ""
    let wholeNum = Math.floor(num)
    for(let i = 0; i < wholeNum; i++){
        rating += "*"
        if(i != wholeNum -1){
            rating +=" "
        }
    }
    if(wholeNum < num){
        rating += "."
    }
    return rating
}
console.log(showRating(3))
console.log(showRating(4.5))
console.log(showRating(0.5))

//Q2 - Given an array of numbers, return the prices
//sorted by low to high
//Bubble sort solution
function sortLowToHigh(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[i]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(sortLowToHigh([20,40,10,30,50,10]))
console.log(sortLowToHigh([5,10,0,-5]))
console.log(sortLowToHigh([3,2,1,0]))

//Q3 - Given an array of objects, return the prices
//sorted by high to low
function sortHightoLow(arr){
    return arr.sort((a, b) => b.price - a.price)
}
console.log(sortHightoLow(
    [{id: 1, price: 50},
        {id: 2, price: 30},
        {id: 3, price: 60},
        {id: 4, price: 10}]))

//Q5 - Call this API - 
//"https://jsonplaceholder.typicode.com/posts"
//and return all posts by any given user Id
async function postsByUser(userId){
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await promise.json()
    const posts = result.filter(element => element.userId === userId)
    console.log(posts)
}
postsByUser(4)

//Q6 - Call this API -
//"https://jsonplaceholder.typicode.com/todos"
//and retun the first 6 incomplete todos from the result
async function firstSixIncomplete(userId){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()
    const incomplete = result.filter(element => !element.completed).slice(0,6)
    console.log(incomplete)
}
firstSixIncomplete(6)