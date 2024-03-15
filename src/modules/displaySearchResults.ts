export function displaySearchResults(results) {
    console.log(results);
    results.forEach(item => {
        console.log(item);
        console.log(item.title);
    })
}