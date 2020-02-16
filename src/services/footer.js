import preval from 'preval.macro'

export const footerHTML = preval`
const request = require('sync-request')
const cheerio = require('cheerio')
const fs = require('fs')

const res = request('GET', 'https://dwarves.foundation', { retry: true })
const $ = cheerio.load(res.getBody().toString())
const html = $('footer').html()

fs.writeFileSync('./.footer-html.js', "module.exports = '" + html + "'", {
  flag: 'w+',
})

const s = fs.readFileSync('./.footer-html.js').toString()
console.log(s)

module.exports = html
`
