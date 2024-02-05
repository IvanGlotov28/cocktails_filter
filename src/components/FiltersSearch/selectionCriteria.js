const selectionCriterion = (selectedСriterion) => {
  let objProp = null
  switch (selectedСriterion) {
    case 'c':
      return (objProp = 'strCategory')
    case 'g':
      return (objProp = 'strGlass')
    case 'i':
      return (objProp = 'strIngredient1')
    case 'a':
      return (objProp = 'strAlcoholic')
  }
  return objProp
}

export default selectionCriterion
