import coinify from '../index.js'

console.log(coinify.list())
console.log(coinify.listAll())
console.log(coinify.listNaturals())
console.log(coinify.listSpecials())

for (const iso of ['NOK', 'USD', 'SEK', 'XAU']) {
    console.log('-----')
    console.log('decimals', coinify.decimals(iso))
    console.log('name', coinify.name(iso))
    console.log('rounding', coinify.rounding(iso))
    console.log('symbol', coinify.symbol(iso))
    console.log('currency', coinify.currency(iso))
}
