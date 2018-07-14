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
async function printAll() {
  await printString("A")
  await printString("B")
  await printString("C")
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

async function addAll() {
  let toPrint = ''
  toPrint = await addString(toPrint, 'A')
  toPrint = await addString(toPrint, 'B')
  toPrint = await addString(toPrint, 'C')
  console.log(toPrint) // Prints out " A B C"
}
addAll()