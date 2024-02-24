import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_7OgTegtrpEMGEccKioPotkPmOBpH2h9O0x67wsfa');
convertCurrency("INR","USD",3)
export async function convertCurrency(fromCurrecncy, toCurrency, units){
    const res=await freecurrencyapi.latest({
        base_currency: fromCurrecncy,
        currencies: toCurrency
    });
    const multiplier=res.data[toCurrency];
    console.log(multiplier)
    return multiplier*units;
}
freecurrencyapi.latest({
    base_currency: 'USD',
    currencies: 'INR'
}).then(response => {
    console.log(response);
});