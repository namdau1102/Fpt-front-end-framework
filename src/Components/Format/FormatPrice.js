/**
 * 
 * @param {number} price 
 * @returns 
 */
export const formatPriceVND = (price) => {
    if (price)
        return price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    else
        return price
}

