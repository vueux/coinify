import national from './src/currencies/national.js'
import naturals from './src/currencies/naturals.js'
import specials from './src/currencies/specials.js'
import mapper from './src/mapper.js'

const currencies = { ...national, ...naturals, ...specials }

const list = () => {
    return Object.keys(national).map(code => {
        return mapper(national[code], code)
    })
}

const listAll = () => {
    return Object.keys(currencies).map(code => {
        return mapper(currencies[code], code)
    })
}

const listNaturals = () => {
    return Object.keys(naturals).map(code => {
        return mapper(naturals[code], code)
    })
}

const listSpecials = () => {
    return Object.keys(specials).map(code => {
        return mapper(specials[code], code)
    })
}

const currency = code => {
  code = code.toUpperCase()
  if (!currencies?.[code]) return mapper({
    s: code,
    n: 'Unknown',
    sn: code,
    d: 0,
    r: 0,
    c: code,
    np: 'Unknown'
  })
  return mapper(currencies[code], code)
}

const symbol = (code) => {
    code = code.toUpperCase()
    if (!currencies?.[code]) return code
    return currencies[code][0]
}

const symbolNative = (code) => {
    code = code.toUpperCase()
    if (!currencies?.[code]) return code
    return currencies[code][2]
}

const decimals = code => {
  code = code.toUpperCase()
  if (!currencies?.[code]) return 0
  return currencies[code][3]
}

const rounding = code => {
  code = code.toUpperCase()
  if (!currencies?.[code]) return 0
  return currencies[code][4]
}

const name = (code) => {
    code = code.toUpperCase()
    if (!currencies?.[code]) return 'Unknown'
    return currencies[code][1]
}

const namePlural = (code) => {
    code = code.toUpperCase()
    if (!currencies?.[code]) return 'Unknown'
    return currencies[code][5]
}

export default {
    currency,
    symbol,
    symbolNative,
    decimals,
    rounding,
    name,
    namePlural,
    list,
    listAll,
    listNaturals,
    listSpecials
}

export {
    currency,
    symbol,
    symbolNative,
    decimals,
    rounding,
    name,
    namePlural,
    list,
    listAll,
    listNaturals,
    listSpecials
}