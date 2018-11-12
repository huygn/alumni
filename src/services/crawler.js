// import axios from 'axios'
// import cheerio from 'cheerio'

// export const crawlFooter = async () => {
//   try {
//     const { data } = await axios.get('https://dwarves.foundation')
//     const $ = cheerio.load(data)
//     const footer = $('footer').html()
//     return footer
//   } catch (err) {
//     return ''
//   }
// }

import preval from 'preval.macro'

export const footerHTML = preval`
const request = require('sync-request')
const cheerio = require('cheerio')

const res = request('GET', 'https://dwarves.foundation')
const $ = cheerio.load(res.getBody().toString())
const footer = $('footer').html()

module.exports = footer
`
