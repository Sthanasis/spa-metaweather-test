/*
Let us define a precedence string as follows:
"F>E" means that in the word, the letter "F" comes before the letter "E".

The objective of this test is to implement the find_the_word function.
When passed a list of precedences, the function will return the word associated to the input.
There are no duplicate letters in the word.

For example:
------------

findTheWord(["G>W","W>F"]) should return GWF
findTheWord(["E>R","R>S","S>O","O>N","P>E"]) should return PERSON

*/

function findTheWord(letters) {
  const array= []
  letters.forEach(el => {
    const val = el.split(">")
    const first = val[0];
    const second = val[1]
    const firstItemExists = array.find(el => el === first)
    const secondItemExists = array.find(el => el === second)
    if (firstItemExists && secondItemExists) {
      console.log(first, second)
    } else {
        if(array.length === 0 || (!firstItemExists && !secondItemExists)) {
        array.push(first)
        array.push(second)
      } else {
        if(secondItemExists) {
          const findItemIndex = array.findIndex(el => el === second)
          array.splice(findItemIndex, 0, first)
        } else {
          array.push(second)
        }
      }
    } 
  })
  return array.join("")
}
