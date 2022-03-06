/**
 * 
 * @param {string} pathName 
 * @returns 
 */
export const CheckRouter = (pathName) => {
    if (pathName.search('/admin') === 0) {
        return false
    }
    else {
        return true
    }
}