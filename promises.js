// Print A, B, C
function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        console.log(string)
        resolve()
      },
      Math.floor(Math.random() * 100) + 1
    )
  })
}
function printAll() {
  printString("A")
    .then(() => printString("B"))
    .then(() => printString("C"))
}
printAll()

//Concatenate the strings

function addString(previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(previous + ' ' + current)
      },
      Math.floor(Math.random() * 100) + 1
    )
  })
}

function addAll() {
  addString('', 'A')
    .then(result => addString(result, 'B'))
    .then(result => addString(result, 'C'))
    .then(result => console.log(result))
}
addAll()