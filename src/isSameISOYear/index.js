import startOfISOYear from '../startOfISOYear/index.js'

/**
 * @name isSameISOYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOYear(
 *   new Date(2003, 11, 29),
 *   new Date(2005, 0, 2)
 * )
 * //=> true
 */
export default function isSameISOYear (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfYear = startOfISOYear(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
}