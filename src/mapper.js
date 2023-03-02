export default (currency, iso) => ({
    iso,
    symbol: currency[0],
    name: currency[1],
    symbol_native: currency[2],
    decimal_digits: currency[3],
    rounding: currency[4],
    name_plural: currency[5]
})