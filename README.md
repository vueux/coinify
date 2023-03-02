# Coinify - Get currency ISO 4217 data

```bash
npm i coinify
```

## Usage

### Import the whole library

```js
import coinify from 'coinify'

coinify.list() // List all national currencies
coinify.listNaturals() // List natural currencies
coinify.listSpecials() // List special currencies
coinify.listAll() // List all currencies
coinify.decimals('USD') // Get decimals of currency
coinify.name('USD') // Get name of currency
coinify.rounding('USD') // Get rounding of currency
coinify.symbol('USD') // Get symbol of currency
coinify.currency('USD') // Get the whole currency object
```

### Import part of the library
```js
import { listNaturals, decimals, symbol } from 'coinify'

listNaturals() // List natural currencies
decimals('USD') // Get decimals of currency
symbol('USD') // Get symbol of currency
```

### The currency instance
```js
{
  iso: 'USD',
  symbol: '$',
  name: 'US Dollar',
  symbol_native: '$',
  decimal_digits: 2,
  rounding: 0,
  name_plural: 'US dollar'
}
```

### Disclaimer
Software is delivered as is, with no guarantees
