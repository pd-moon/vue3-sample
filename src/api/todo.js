export const getData = (length) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const temp = []
      for (let index = 1; index < length + 1; index++) {
        temp.push({
          id: index,
          name: `No.${index}${index}${index}`,
          text: `${index}abcdefgh${index}`,
          price: 2345678 * index,
        })
      }

      resolve(temp)
    }, 500)
  })
}
