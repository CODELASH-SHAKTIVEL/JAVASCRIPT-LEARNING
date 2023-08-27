// QuerySelector
// let result = document.querySelector('p');
// console.log(result);

let results = document.querySelectorAll('p');
console.log(results);

// forEach runs only for nodelist not for html collection
results.forEach(element => {
    console.log(`Element: ${element}`);
});


// Get element by TagName
let TagNameElement = document.getElementsByTagName('p');
console.log(TagNameElement);

// Won't Work for HtmlCollection
// TagNameElement.forEach(element => {
//     console.log(element);
// });

// Converting HtmlCollection to an array and using forEach
Array.from(TagNameElement).forEach(element => {
    console.log(element);
});


