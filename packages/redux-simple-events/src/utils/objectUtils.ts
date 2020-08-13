/**
 * Checks if object is a plain object
 */
export const isPlainObject = (obj: Record<string, unknown>): boolean => {
  if (typeof obj === 'object' && obj !== null) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  return false
}
