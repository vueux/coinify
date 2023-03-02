import {
    list,
    listAll,
    listNaturals,
    listSpecials,
    decimals,
    name,
    rounding,
    symbol,
    currency
} from '../index.js'

console.log(list())
console.log(listAll())
console.log(listNaturals())
console.log(listSpecials())

for (const iso of ['NOK', 'USD', 'SEK', 'XAU']) {
    console.log('-----')
    console.log('decimals', decimals(iso))
    console.log('name', name(iso))
    console.log('rounding', rounding(iso))
    console.log('symbol', symbol(iso))
    console.log('currency', currency(iso))
}
