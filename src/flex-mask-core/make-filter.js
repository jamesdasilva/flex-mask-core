const makeFilter = (mask) => {
  let filter = []
  let accFilter = ''
  for(let i = 0; i < mask.length; i++) {
    if(mask[i].keyChar) {
      filter.push(`^${accFilter}${mask[i].regEx}{0,${mask[i].end - mask[i].start}}$`)
      accFilter = `${accFilter}${mask[i].regEx}{${mask[i].end - mask[i].start}}`
    } else {
      accFilter = `${accFilter}${mask[i].regEx}`
    } 
  }
  return new RegExp(filter.join('|'))
}
export default makeFilter
