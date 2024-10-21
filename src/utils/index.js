/**
 * This function calculates tatal price of a new order
 * @param {Array} products cartProduct:Array of Objects
 * @returns {Number} Total Price 
 */

export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0).toFixed(2)
}

export const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date
}