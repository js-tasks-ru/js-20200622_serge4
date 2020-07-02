/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {

  if ( typeof arr !== 'undefined' ) {
    const result = arr.filter( ( item, index, array ) => array.indexOf(item) === index );
    return result;
   } else {
    return [];
   }
   
}
