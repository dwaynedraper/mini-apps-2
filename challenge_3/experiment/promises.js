//promises
const getFirstName = () => {
  return new Promise(resolve => {
      let firstName = "pending"
      setTimeout(() => {
          firstName = "Dwayne"
          resolve(firstName)
      }, 1000)
  })
}
const getLastName = (cb) => {
  return new Promise(resolve => {
      let lastName = "pending"
      setTimeout(() => {
          lastName = "Draper"
          resolve(lastName)
      }, 1000)
  })
}
// one way to implement
let fullName = ""
getFirstName()
  .then((firstName) => {
      fullName += firstname
      return getLastName()
  })
  .then(lastName => {
      fullName += lastName
      console.log(fullName)
  })
// another way to implement
Promise
  .all([getFirstName(), getLastName()])
  .then(names => {
      console.log(names.join(" "))
  })
// now we can use async await
const getFullName = async () => {
  const firstName = await getFirstName()
  const lastName = await getLastName()
  console.log(firstName,lastName)
}
// callbacks
// const getFirstName = (cb) => {
//     let firstName = "pending"
//     setTimeout(() => {
//         firstName = "Dwayne"
//         cb(firstName)
//     }, 1000)
// }
// const getLastName = (cb) => {
//     let lastName = "pending"
//     setTimeout(() => {
//         lastName = "Draper"
//         cb(lastName)
//     }, 1000)
// }
// getFirstName((firstName) => {
//     getLastName((lastName) => {
//         console.log(firstName, lastName)
//     })
// })