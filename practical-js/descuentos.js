const coupons = [5, 10, 15, 20, 25, 30];

function calculatePriceWithDiscount (price, discount) {
const percentageToPay = 100 - discount;
const priceWithDiscount = (price * percentageToPay) / 100;
return priceWithDiscount;
}


function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponNumber = inputCoupon.value;
    const discountFromCoupon = coupons[couponNumber - 1]

    const priceWithDiscount = calculatePriceWithDiscount (priceValue, discountFromCoupon);
    const resultP = document.getElementById("priceResult");

    switch (discountFromCoupon) {
        case 5:
            calculatePriceWithDiscount(priceValue, discountFromCoupon)
            resultP.innerText = "The price with the discount is: $ " + priceWithDiscount;   
            break;

        case 10:
            calculatePriceWithDiscount(priceValue, discountFromCoupon)
            resultP.innerText = "The price with the discount is: $ " + priceWithDiscount;   
             break;
    
        case 15:
            calculatePriceWithDiscount(priceValue, discountFromCoupon)
            resultP.innerText = "The price with the discount is: $ " + priceWithDiscount;   
             break;

        case 20:
            calculatePriceWithDiscount(priceValue, discountFromCoupon)
            resultP.innerText = "The price with the discount is: $ " + priceWithDiscount;   
            break;

        case 25:
            calculatePriceWithDiscount(priceValue, discountFromCoupon)
            resultP.innerText = "The price with the discount is: $ " + priceWithDiscount;   
        break;  

        case 30:
            calculatePriceWithDiscount(priceValue, discountFromCoupon)
            resultP.innerText = "The price with the discount is: $ " + priceWithDiscount;   
        break;

        default:
            resultP.innerText = "Invalid coupon number";
            break;
    }
}