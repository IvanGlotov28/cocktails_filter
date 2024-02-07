const getItemList = (drink, prefix) => {
  let currentItemNum = 1
  const allItems = []
  let currentItem = `${prefix}${currentItemNum}`

  do {
    allItems.push(drink[currentItem])
    currentItemNum++
    currentItem = `${prefix}${currentItemNum}`
  } while (drink[currentItem])

  return allItems
}

export default getItemList
