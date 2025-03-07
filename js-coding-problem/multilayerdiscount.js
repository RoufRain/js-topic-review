/**find total with discount
 * upto 100 => no discount
 * upto 101 to 200 => 90tk
 * upto 200 to upper => 70tk
 */
function discountPrice(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    return quantity * 90;
  } else {
    return quantity * 80;
  }
}
const totalPrice = discountPrice(300);
console.log(totalPrice);

/*layered discount section
 *upto 100 => 100tk
 * upto 200 => 90tk
 * above 300 => 70tk
 */
function layerDiscount(quantity) {
  const upto100Price = 100;
  const second200Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    return quantity * upto100Price;
  } else if (quantity <= 200) {
    const upto100Total = 100 * upto100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second200Price;
    const total = upto100Total + remainingTotal;
    return total;
  } else {
    const upto100Total = 100 * upto100Price;
    const second200Total = 100 * second200Price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * above200Price;
    const total = upto100Total + second200Total + remainingTotal;
    return total;
  }
}
const total = layerDiscount(200);
console.log(total);
