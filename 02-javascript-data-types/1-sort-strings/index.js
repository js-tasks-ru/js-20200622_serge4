/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  const order = {
    asc: 1,
    desc: -1
  }

  const sortableArray = arr.map( string => string );

  const result = sortableArray.sort( ( prev, next ) => order[param] * prev.localeCompare(next, 'ru', { caseFirst: 'upper' }) );

  return result;
}
