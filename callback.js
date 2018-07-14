// Prints out " A B C"
function printString(string, callback) {
  setTimeout(
    () => {
      console.log(string)
      callback()
    },
    Math.floor(Math.random() * 100) + 1
  )
}

function printAll() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {})
    })
  })
}
printAll()

//Concatenate the strings

function addString(previous, current, callback) {
  setTimeout(
    () => {
      let word = previous + ' ' + current;
      callback((word))
    },
    Math.floor(Math.random() * 100) + 1
  )
}

function addAll() {
  addString('', 'A', result => {
    addString(result, 'B', result => {
      addString(result, 'C', result => {
        console.log(result)
      })
    })
  })
}
addAll()