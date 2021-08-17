let str = `
010-1234-5678
theabc@gmail.com
https://www.omdbapi.com/?apikey=5f6c9466&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi')
const regexp1 = /the/gi
console.log(str.match(regexp1))

const regexp2 = /fox/gi
console.log(regexp2.test(str))

const regexp = /fox/gi
str = str.replace(regexp, 'AAA')
console.log(str)