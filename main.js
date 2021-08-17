const str = `
010-1234-5678
theabc@gmail.com
https://www.omdbapi.com/?apikey=5f6c9466&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi')
const regexp = /the/gi
console.log(str.match(regexp))